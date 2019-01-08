export const getPick = (restaurant) => {
    return {
      type: 'GET_PICK',
      restaurant
    };
  }