import CONFIGURATION from './configuration';

const API_ENDPOINT = {
  LIST: `${CONFIGURATION.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIGURATION.API_BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIGURATION.API_BASE_URL}/search?q=${query}`,
  REVIEW: `${CONFIGURATION.API_BASE_URL}/review`,
  SMALL_PICTURE: (pictureId) => `${CONFIGURATION.API_BASE_URL}/images/small/${pictureId}`,
  MEDIUM_PICTURE: (pictureId) => `${CONFIGURATION.API_BASE_URL}/images/medium/${pictureId}`,
  LARGE_PICTURE: (pictureId) => `${CONFIGURATION.API_BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
