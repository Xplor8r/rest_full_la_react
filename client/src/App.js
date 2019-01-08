import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Welcome from './components/welcome'
import Pick from './components/pick'
import Restaurants from './components/restaurants'
import { fetchRestaurantData } from './actions/restaurants'
import { Button } from 'reactstrap';
// import Hungry from './components/hungry'

const NotFound = () => <div>Not Found</div>

class App extends Component {
  state = {fetchData: false, restaurantData: []}

  componentDidMount() {
    this.props.fetchRestaurantData();
  }
  render() {
    return (
      <Router>
         <div className="App">
          
          <Route exact path="/pick" component={Pick}/>
          <Route exact path="/restaurants" component={Restaurants}/>
          <Route component={NotFound} />
          <div className="App-header">
            <h1>RestFull LA!</h1>
            <h4>the app that helps the restless and empty in LA to rest and be full in LA!</h4>
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>
            <Route exact path="/welcome" component={Welcome}/>
            </div>
          </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {state}
}
const mapDispatchToProps = (dispatch) => {
  return {fetchRestaurantData: () => dispatch(fetchRestaurantData())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);