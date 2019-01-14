import React from 'react';
import ModalMap from './modal'

const Restaurant = ({restaurant}) => {
        return (
            
            <div key={restaurant.id}>
                <div>
                    <h5>{restaurant.name}</h5>
                    <p>Address:{restaurant.location.address}</p>
                    <p>Cuisine: {restaurant.categories.map(cat => cat.shortName)}</p>
                    {restaurant.delivery?
                    <p>Delivery: yes<br/>
                    <a href={restaurant.delivery.url} rel="noopener noreferrer" target="_blank">Order Now</a></p>:
                    <p>Delivery: no</p>}
                </div>
                <ModalMap restaurant={restaurant}/>
            </div>
        )

}

export default Restaurant