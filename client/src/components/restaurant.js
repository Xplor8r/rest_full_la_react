import React from 'react';
import ModalMap from './modal'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col } from 'reactstrap';

const Restaurant = ({restaurant}) => {
        return (
            <Col xs="auto">
                <Card className="text-center" key={restaurant.id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h4>{restaurant.name.split('|')[0]}</h4></CardTitle>
                        <CardSubtitle><p>Address:{restaurant.location.address}</p></CardSubtitle>
                        <CardText><p>Category: {restaurant.categories.map(cat => cat.shortName)}</p></CardText>
                        <CardText>{restaurant.delivery?
                                <p>Delivery: yes<br/><a href={restaurant.delivery.url} rel="noopener noreferrer" target="_blank">Order Now</a></p>:
                                <p>Delivery: no</p>}</CardText>
                        <ModalMap restaurant={restaurant}/>
                    </CardBody><br/>
                </Card>
            </Col>
        )
}

export default Restaurant