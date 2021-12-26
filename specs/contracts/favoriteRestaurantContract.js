/* eslint-disable no-undef */
const actAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('Should get favorited resto', async () => {
    await favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 2 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(3)).toBeUndefined();
  });

  it('Should refuse add favorite resto if does not have the correct property', async () => {
    await favoriteRestaurant.putFavoriteRestaurant({ aProperty: 'incorrect property' });
    expect(await favoriteRestaurant.getAllFavoriteRestaurant()).toEqual([]);
  });

  it('Should get all favorite restaurant', async () => {
    await favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 2 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 3 });

    expect(await favoriteRestaurant.getFavoriteRestaurantById(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(3)).toEqual({ id: 3 });
  });

  it('Should remove favorite restaurant', async () => {
    await favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 2 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 3 });

    await favoriteRestaurant.deleteFavoriteRestaurantById(3);

    expect(await favoriteRestaurant.getFavoriteRestaurantById(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getFavoriteRestaurantById(3)).toBeUndefined();
  });

  it('Should not throw error when remove favorite restaurant that not in the list', async () => {
    await favoriteRestaurant.putFavoriteRestaurant({ id: 1 });
    await favoriteRestaurant.putFavoriteRestaurant({ id: 2 });

    await favoriteRestaurant.deleteFavoriteRestaurantById(3);

    expect(await favoriteRestaurant.getAllFavoriteRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });
};

export default actAsFavoriteRestaurantModel;
