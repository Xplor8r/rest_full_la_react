import { combineReducers } from 'redux'

import restaurantData from './restuarantDataReducer'


const rootReducer = combineReducers({
  restaurantData,

})

export default rootReducer