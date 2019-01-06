import { combineReducers } from 'redux'

import restaurantReducer from './restuarantsReducer'


const rootReducer = combineReducers({
  restaurantsReducer,

})

export default rootReducer