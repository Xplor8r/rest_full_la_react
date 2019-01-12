import React from 'react';

const Restaurant = ({restaurant}) => {
        return (
            <div key={restaurant.id}>
                <div>
                    <h5>{restaurant.name}</h5>
                    <p>{restaurant.location.address}</p>
                    <p>{restaurant.categories.first.name}</p>
                    {restaurant.delivery? <p>Delivery: yes</p>: <p>Delivery: no</p>}
                </div>
            </div>
        )

}

export default Restaurant