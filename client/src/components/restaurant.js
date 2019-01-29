import React, { Component } from 'react';
import ModalMap from './map'
import { Card, CardImg, CardText, CardBody, Button,
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

class Restaurant extends Component {

    getImage() {
        let category = this.props.restaurant.category
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
    
    state = {count: 0}

    handleOnClick () {
      this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <Card style={{backgroundColor: 'black', margin: '.5rem' }} key={this.props.restaurant.id}>
                <CardImg top width="50%" src={this.getImage()} alt="Card image cap" />
                <CardBody>
                    <CardTitle><h5>{this.props.restaurant.name.split('|')[0]}</h5></CardTitle>
                    <CardSubtitle>{this.props.restaurant.address}, {this.props.restaurant.city}</CardSubtitle>
                    <CardText>Category: {
                        this.props.restaurant.category === "Building" ? "Restaurant" : this.props.restaurant.category}
                        </CardText>
                    <CardText>{this.props.restaurant.delivery?
                            <span>Delivery: yes    <a href={this.props.restaurant.delivery_url} rel="noopener noreferrer" target="_blank">Order Now</a></span>:
                            <span>Delivery: no</span>}</CardText>
                    {this.props.restaurant.longitude? <ModalMap restaurant={this.props.restaurant} />: <div></div>}
                    <CardText>
                        <Button onClick={() => this.handleOnClick()}>Like</Button>{' '}
                        Likes: {this.state.count}
                    </CardText>
                </CardBody><br/>
            </Card>
        )
    }
}

export default Restaurant
