import API_ENDPOINT from '../global/api-endpoint';

const RestaurantData = {
  async getListOfRestaurant() {
    const listOfRestaurant = await fetch(API_ENDPOINT.LIST, { method: 'GET' });
    const listOfRestaurantJSON = await listOfRestaurant.json();
    return listOfRestaurantJSON;
  },

  async getDetailOfRestaurant(id) {
    const detailOfRestaurant = await fetch(API_ENDPOINT.DETAIL(id), { method: 'GET' });
    const detailOfRestaurantJSON = await detailOfRestaurant.json();
    return detailOfRestaurantJSON;
  },

  async addNewReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJSON = await response.json();
    await fetch(API_ENDPOINT.DETAIL(review.id), { method: 'GET' });
    return responseJSON;
  },
};

export default RestaurantData;
