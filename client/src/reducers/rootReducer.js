import { combineReducers } from 'redux'
import pick from './pickReducer'
import restaurantData from './restuarantDataReducer'


const rootReducer = combineReducers({
  restaurantData,
  pick
})

export default rootReducer