import { endDataFetch } from './dataFetch'
import { pick } from './pick'

export const fetchRestaurantData = () => {
    return dispatch => {
        fetch(`RailsApi/restaurants`)
        .then(response => response.json())
        .then(restaurantData => {
            dispatch(getRestaurantData(restaurantData))
            dispatch(endDataFetch())
            dispatch(pick(restaurantData[Math.floor(Math.random()*restaurantData.length)]))
        })
    }    
}

const getRestaurantData = restaurantData => {
    return {
      type: 'GET_RESTAURANT_DATA',
      restaurantData
    };
}
