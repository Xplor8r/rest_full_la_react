import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'
import Restaurant from '../components/restaurant';
// import { getPick } from '../actions/pick';
import { connect } from 'react-redux'

export class Pick extends React.Component {

    // handleNewRecommendation() {
    //     let restaurant = this.props.restaurantData[Math.floor(Math.random()*this.props.restaurantData.length)]
    //     this.props.dispatch(getPick(restaurant))
    // }
    render() {
        const restaurant = this.props.pick.restaurant
        return (
            <div>
                <Restaurant key={restaurant.id} restaurant={restaurant} />
                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      restaurantData: state.restaurantData,
      pick: state.pick
    }
  }
  
  
  export default Pick = connect(mapStateToProps)(Pick)