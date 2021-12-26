import * as testFactories from './helpers/testFactories';
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurant-idb';

/* eslint-disable no-undef */
describe('Unfavoriting resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="favorite-button" class="favorite-button"></button>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIDB.putFavoriteRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(1);
  });

  it('Should show unfavorite button if resto has favorited before', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="remove from favorite"')).toBeTruthy();
  });

  it('Should not show unfavorite button if resto not favorited', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(1);
    expect(document.querySelector('[aria-label="add to favorite"')).toBeFalsy();
  });

  it('Should be able to unfavorite resto', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIDB.getFavoriteRestaurantById(1)).toBeUndefined();
  });

  it('Should not throw error if the unfavorite resto not in the list', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(1);
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIDB.getAllFavoriteRestaurant()).toEqual([]);
  });
});
