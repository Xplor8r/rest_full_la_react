const pick = (state = {restaurant: {}}, action) => {
    switch (action.type) {
      case 'GET_PICK':
        return {restaurant: action.restaurant}
      default:
        return state
    }
  }
  
export default pick