import { defineConfig, devices } from '@playwright/test';
import { env } from 'node:process';

export default defineConfig({
  testDir: './e2e',
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4300',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command: 'npm start -- --host 127.0.0.1 --port 4300 --configuration development',
    url: 'http://127.0.0.1:4300/home',
    reuseExistingServer: !env['CI'],
    timeout: 120_000,
  },
});
