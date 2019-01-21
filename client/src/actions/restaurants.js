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

export const addNewRestaurant = (input) => {
    return dispatch => {
        const restaurant = {
            restaurant: {
                name: input.name,
                address: input.address,
                city: input.city,
                category: input.category,
                delivery: input.delivery,
                delivery_url: input.delivery_url,
                latitude: input.latitude,
                longitude: input.longitude
            }
        }
        fetch('RailsApi/create',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(restaurant)
        })
        .then(response => response.json())
        .then(newRestaurant =>{ 
            dispatch(addRestaurant(newRestaurant))
        })
    }  
}
const addRestaurant = newRestaurant => {
    return {
        type: 'ADD_RESTAURANT',
        payload: [newRestaurant]
    };
}