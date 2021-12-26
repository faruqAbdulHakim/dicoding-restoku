/* eslint-disable no-undef */
import * as testFactories from './helpers/testFactories';
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurant-idb';

describe('Favoriting resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="favorite-button" class="favorite-button"></button>';
  };

  beforeEach(() => addLikeButtonContainer());

  it('Should show favorite button if resto', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
  });

  it('Should not show favorite button if resto has favorited before', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });

  it('Should be able to favorite resto', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIDB.getFavoriteRestaurantById(1)).toEqual({ id: 1 });
    await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(1);
  });

  it('Should not add duplicated favorite resto', async () => {
    await testFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestaurantIDB.putFavoriteRestaurant({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIDB.getAllFavoriteRestaurant()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(1);
  });

  it('Should not add to favorite if resto doesn\'t have id', async () => {
    await testFactories.createLikeButtonPresenter({});
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIDB.getAllFavoriteRestaurant()).toEqual([]);
  });
});
