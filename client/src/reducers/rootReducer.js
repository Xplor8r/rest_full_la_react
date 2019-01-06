import { combineReducers } from 'redux'

import restaurantsReducer from './restuarantsReducer'


const rootReducer = combineReducers({
  restaurantsReducer,

})

export default rootReducer