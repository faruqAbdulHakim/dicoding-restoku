const createRestoItem = (restaurant) => {
  const restoItem = document.createElement('resto-item');
  restoItem.setRestaurant = restaurant;
  return restoItem;
};

const createRestoDetail = (restaurant) => {
  const restoDetail = document.createElement('resto-detail');
  restoDetail.setRestaurant = restaurant;
  return restoDetail;
};

const createFavoriteButton = () => `
  <svg
    aria-label="add to favorite"
    focusable="false"
    data-prefix="far"
    data-icon="heart"
    class="svg-inline--fa fa-heart"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98l-19.7 20.27l-19.7-20.27C208.6 47.4 170.8 32 133.3 32C103.1 32 73.23 41.93 49.04 62.86c-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7C239.4 476.7 247.6 480 255.9 480c8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1l-181.6 187.8L74.34 237.1C42.1 203.8 34.46 138.1 80.46 99.15c39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92l54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z"
    ></path>
  </svg>
`;

const createFillFavoriteButton = () => `
  <svg
    aria-label="remove from favorite"
    focusable="false"
    data-prefix="fas"
    data-icon="heart"
    class="svg-inline--fa fa-heart"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
  <path
    fill="currentColor"
    d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
  ></path>
  </svg>
`;

export {
  createRestoItem,
  createRestoDetail,
  createFavoriteButton,
  createFillFavoriteButton,
};
