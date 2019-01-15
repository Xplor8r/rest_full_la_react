import { endDataFetch } from './dataFetch'
import { getPick } from './pick'
// import { beginDataFetch } from './dataFetch'
export const fetchRestaurantData = () => {
    return dispatch => {
        fetch(`RailsApi/restaurants`)
        .then(response => response.json())
        .then(restaurantData => {
            dispatch(getRestaurantData(restaurantData))
            dispatch(getPick(restaurantData[Math.floor(Math.random()*restaurantData.length)]))
            dispatch(endDataFetch())
        })
    }    
}

const getRestaurantData = restaurantData => {
    return {
      type: 'GET_RESTAURANT_DATA',
      restaurantData
    };
}
