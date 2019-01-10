import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import Restaurant from '../components/restaurant'

class Restaurants extends React.Component {
    render() {
        const restaurants = this.state.restaurants.map((restaurant) => {
             return <Restaurant key={restaurant.id} restaurant={restaurant} />
        })
        return (
            <div>
                <h3>List of LA Restaurants</h3>
                <h4>Filter</h4>
                <ul>
                    {restaurants}
                </ul>
                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      restaurants: state.restaurants
    }
  }
  
export default Restaurants = connect(mapStateToProps)(Restaurants)