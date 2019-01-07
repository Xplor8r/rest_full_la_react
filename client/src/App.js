import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Welcome from './components/welcome'
import Pick from './components/pick'
import Restaurants from './components/restaurants'
// import { getRestraurantData } from './actions/restaurants'
import { Button } from 'reactstrap';

const NotFound = () => <div>Not Found</div>

class App extends Component {
  state = {fetchData: true, restaurantData: []}
  componentDidMount() {
    return fetch(`RailsApi/restaurants`)
    .then(response => response.json())
    .then(restaurantData => this.setState({
      fetchData: false,
      restaurantData }))
  }
  render() {
    const {fetchData, restaurantData } = this.state;
    console.log(fetchData)
    console.log(restaurantData)
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
            <Link to="/welcome"><Button>Yes</Button></Link>
            <Route exact path="/welcome" component={Welcome}/>
            </div>
          </div>
      </Router>
    );
  }
}

export default connect()(App);
