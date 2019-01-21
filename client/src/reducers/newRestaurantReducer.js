const newRestaurant = (state = { restaurants: []}, action) => {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [action.payload, ...state.restaurants], loadin}
        default:
            return state
    }
}
