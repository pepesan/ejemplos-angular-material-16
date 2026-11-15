const { spawn } = require('node:child_process');
const { setTimeout: delay } = require('node:timers/promises');
const { AfterAll, BeforeAll, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(120_000);
const { chromium } = require('playwright');

let server;
let browser;
let page;

async function waitForServer() {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Angular dev server exited with code ${server.exitCode}`);
    }
    try {
      const response = await fetch('http://127.0.0.1:4300/home');
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await delay(500);
  }
  throw new Error('Angular dev server did not become ready within 120 seconds');
}

BeforeAll(async function () {
  server = spawn(process.execPath, ['node_modules/@angular/cli/bin/ng.js', 'serve', '--host', '127.0.0.1', '--port', '4300', '--configuration', 'development'], {
    stdio: 'ignore',
  });
  try {
    await waitForServer();
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
  } catch (error) {
    server.kill('SIGTERM');
    throw error;
  }
});

AfterAll(async function () {
  if (browser) await browser.close();
  if (server && server.exitCode === null) {
    server.kill('SIGTERM');
    await Promise.race([
      new Promise((resolve) => server.once('exit', resolve)),
      delay(5_000),
    ]);
    if (server.exitCode === null) server.kill('SIGKILL');
  }
});

function getPage() {
  if (!page) throw new Error('Browser page is not initialized');
  return page;
}

module.exports = { getPage };
