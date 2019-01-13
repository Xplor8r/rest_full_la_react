import { combineReducers } from 'redux'
import pick from './pickReducer'
import restaurantData from './restuarantDataReducer'
import dataFetch from './dataFetchReducer'

const rootReducer = combineReducers({
  restaurantData,
  pick,
  dataFetch
})

export default rootReducer