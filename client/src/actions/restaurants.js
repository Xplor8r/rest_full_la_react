export const fetchRestaurantData = () => {
    return dispatch => {
        fetch(`RailsApi/restaurants`)
        .then(response => response.json())
        .then(restaurantData => {
            dispatch(getRestaurantData(restaurantData))
            console.log(restaurantData[0]["name"])
        })
    }    
}

const getRestaurantData = restaurantData => {
    return {
      type: 'GET_RESTAURANT_DATA',
      restaurantData
    };
}
