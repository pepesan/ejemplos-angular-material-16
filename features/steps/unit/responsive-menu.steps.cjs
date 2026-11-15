require('tsx/cjs');

const assert = require('node:assert/strict');
const { Given, When, Then } = require('@cucumber/cucumber');
const { isCompactMenu } = require('../../../src/app/components/menu-responsive/menu-responsive.helpers.ts');

let viewportWidth;
let compactMenu;

Given('a viewport width of {int} pixels', (width) => {
  viewportWidth = width;
});

When('the responsive menu breakpoint is evaluated', () => {
  compactMenu = isCompactMenu(viewportWidth);
});

Then('the compact menu is enabled', () => {
  assert.equal(compactMenu, true);
});

Then('the compact menu is disabled', () => {
  assert.equal(compactMenu, false);
});
