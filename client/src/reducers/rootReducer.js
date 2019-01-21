import { combineReducers } from 'redux'
import pick from './pickReducer'
import restaurantData from './restuarantDataReducer'
import dataFetch from './dataFetchReducer'
import filter from './filterReducer'
import newRestaurant from './newRestaurantReducer'

const rootReducer = combineReducers({
  restaurantData,
  pick,
  dataFetch,
  filter,
  newRestaurant
})

export default rootReducer