import { combineReducers } from 'redux'
import pick from './pickReducer'
import restaurantData from './restuarantDataReducer'
import dataFetch from './dataFetchReducer'
import filter from './filterReducer'
const rootReducer = combineReducers({
  restaurantData,
  pick,
  dataFetch,
  filter
})

export default rootReducer