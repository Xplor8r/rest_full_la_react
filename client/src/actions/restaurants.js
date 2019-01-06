function _getRestraurantData() {
    return fetch(`RailsApi/restaurants`)
    .then(response => response.json())
}