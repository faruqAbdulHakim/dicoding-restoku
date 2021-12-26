/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'add some Favorite Restaurant first';

Scenario('show text when favorite restaurant empty', ({ I }) => {
  I.seeElement('#resto-list');
  I.see(emptyFavoriteRestoText, '#resto-list p');
});

Scenario('favorite restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('resto-item');
  I.click(locate('resto-item').first());

  // Route to detail page
  const restoItemText = await I.grabTextFrom('resto-detail h3');
  I.wait(1);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  // Route to favorites page
  I.seeElement('resto-item');
  const favoriteRestoItemText = await I.grabTextFrom('resto-item .resto-info h3');
  assert.strictEqual(restoItemText, favoriteRestoItemText);
});

Scenario('remove favorite restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('resto-item');
  I.click(locate('resto-item').first());

  // Route to detail page
  I.wait(1);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  // Route to favorites page
  I.seeElement('resto-item');
  I.click('resto-item');

  // Route to detail page
  I.wait(1);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  // Route to favorite page
  I.seeElement('#resto-list');
  I.dontSeeElement('resto-item');
});

Scenario('cancel add favorite restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('resto-item');
  I.click('resto-item');

  // Route to detail page
  I.wait(1);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  // Route to favorite page
  I.seeElement('#resto-list');
  I.dontSeeElement('resto-item');
});
