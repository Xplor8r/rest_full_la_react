export function getRestraurantData() {
    return fetch(`RailsApi/restaurants`)
    .then(response => response.json())
    .then(restaurants => {
        console.log(restaurants)
    })
}
