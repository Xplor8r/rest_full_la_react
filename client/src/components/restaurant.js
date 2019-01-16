import React from 'react';
import ModalMap from './modal'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Restaurant = ({restaurant}) => {

// Categories:
//  "Salad Place" 
//  "Chinese Restaurant"
//  "Korean Restaurant" 
//     "Deli / Bodega" 
//  "Building" 
// "Restaurant" 
//  "Thai Restaurant" 
//    "Italian Restaurant" 
//    "Seafood Restaurant" 
//   "Sushi Restaurant" 
//    "American Restaurant" 
//  "Diner" 
//    "Steakhouse" 
//    "Peruvian Restaurant" 
//   "Latin American Restaurant" 
//   "Mexican Restaurant" 
//    "French Restaurant" 
 
    console.log(restaurant.categories.map(cat => cat.name))
    return (
        <Card className="text-center" key={restaurant.id}>
            <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle><h4>{restaurant.name.split('|')[0]}</h4></CardTitle>
                <CardSubtitle><p>Address:{restaurant.location.address}</p></CardSubtitle>
                <CardText><p>Category: {restaurant.categories.map(cat => cat.name)}</p></CardText>
                <CardText>{restaurant.delivery?
                        <p>Delivery: yes    <a href={restaurant.delivery.url} rel="noopener noreferrer" target="_blank">Order Now</a></p>:
                        <p>Delivery: no</p>}</CardText>
                <ModalMap restaurant={restaurant}/>
            </CardBody><br/>
        </Card>

    )
}

export default Restaurant