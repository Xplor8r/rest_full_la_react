const pick = (state = {restaurant: {}}, action) => {
    switch (action.type) {
      case 'SET_pick':
        return {restaurant: action.restaurant}
      default:
        return state
    }
  }
  
  export default pick