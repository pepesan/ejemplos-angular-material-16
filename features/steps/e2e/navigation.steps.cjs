const assert = require('node:assert/strict');
const { Given, When, Then } = require('@cucumber/cucumber');
const { getPage } = require('../../../cucumber/e2e-browser.cjs');

Given('the Angular application is open on the home page', async function () {
  this.page = getPage();
  await this.page.goto('http://127.0.0.1:4300/home');
});

Then('the application logo reads {string}', async function (label) {
  assert.equal((await this.page.locator('.logo').textContent()).trim(), label);
});

When('I navigate to the About page', async function () {
  await this.page.getByRole('link', { name: 'About', exact: true }).click();
});

Then('the About page is displayed', async function () {
  await this.page.waitForURL('**/about');
  assert.match(this.page.url(), /\/about$/);
  assert.match(await this.page.locator('app-about').textContent(), /about works!/);
});
