const restaurantsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_RESTAURANT_DATA":
            return action.restaurantData;
        default:
            return state
    }
}
export default restaurantsReducer