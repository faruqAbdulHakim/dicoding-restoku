/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createLikeButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButton: document.querySelector('#favorite-button'),
    restaurant,
  });
};

export { createLikeButtonPresenter };
