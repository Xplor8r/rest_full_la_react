import React from 'react';
import ModalMap from './map'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import american from "../images/american.jpeg"
import asian from "../images/asian.jpeg"
import chinese from "../images/chinese.jpeg"
import deli from "../images/deli.jpeg"
import french from "../images/french.jpeg"
import italian from "../images/italian.jpeg"
import mexican from "../images/mexican.jpeg"
import misc from "../images/misc.jpeg"
import salad from "../images/salad.jpeg"
import seafood from "../images/seafood.jpeg"
import steak from "../images/steak.jpeg"
import sushi from "../images/sushi.jpeg"

const Restaurant = ({restaurant}) => {

function getImage() {
    let category = restaurant.category

    switch (category) {
        case "Chinese Restaurant":
            return chinese;
        case "Korean Restaurant":
        case "Thai Restaurant":
            return asian;
        case "Deli / Bodega":
            return deli;
        case "Peruvian Restaurant":
        case "Latin American Restaurant":
        case "Mexican Restaurant":
            return mexican;
        case "Italian Restaurant":
            return italian;
        case "Seafood Restaurant":
            return seafood;
        case "Sushi Restaurant":
            return sushi;
        case "French Restaurant":
            return french;
        case "American Restaurant":
        case "Diner":
        case "New American Restaurant":
            return american;
        case "Steakhouse":
            return steak;
        case "Salad Place":
            return salad;
        default:
            return misc;
    }
}

    return (
        <Card style={{backgroundColor: 'black', margin: '.5rem' }} key={restaurant.id}>
            <CardImg top width="50%" src={getImage()} alt="Card image cap" />
            <CardBody>
                <CardTitle><h5>{restaurant.name.split('|')[0]}</h5></CardTitle>
                <CardSubtitle>{restaurant.address}, {restaurant.city}</CardSubtitle>
                <CardText>Category: {
                    restaurant.category === "Building" ? "Restaurant" : restaurant.category}
                    </CardText>
                <CardText>{restaurant.delivery?
                        <span>Delivery: yes    <a href={restaurant.delivery_url} rel="noopener noreferrer" target="_blank">Order Now</a></span>:
                        <span>Delivery: no</span>}</CardText>
                <ModalMap restaurant={restaurant}/>
            </CardBody><br/>
        </Card>
    )
}

export default Restaurant
