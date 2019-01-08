export const fetchRestaurantData = () => {
    return dispatch => {
        fetch(`RailsApi/restaurants`)
        .then(response => response.json())
        .then(restaurantData => {
            dispatch(getRestaurantData(restaurantData))
            console.log(restaurantData)
        })
    }    
}

const getRestaurantData = restaurantData => {
    return {
      type: 'GET_RESTAURANT_DATA',
      restaurantData
    };
}
