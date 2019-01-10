const restaurantsReducer = (state = {restaurants: []}, action) => {
    switch (action.type) {
        case "GET_RESTAURANT_DATA":
            return Object.assign({}, state, {restaurants: action.restaurantData});
        default:
            return state
    }
}
export default restaurantsReducer