import React from 'react';
import { Card, CardBody,
    CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import restaurant from "../images/restaurant.jpg"
    
const NoDelivery = () => {

return (
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} >
            <Card style={{backgroundColor: 'grey'}} key={restaurant.id}>
                <CardBody>
                    <CardTitle><h2>No Restaurants Found</h2></CardTitle>
                    <CardSubtitle>Sorry there are no restaurants in this category with delivery</CardSubtitle>
                </CardBody><br/>
            </Card>
        </Col>
    </Row>
)
}

export default NoDelivery