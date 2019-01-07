import React, { Component } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Welcome from './components/welcome'
import Filters from './components/filters'
import Restaurants from './components/restaurants'
// import { getRestraurantData } from './actions/restaurants'
// import { Button } from 'reactstrap';

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
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/filters" component={Filters}/>
          <Route exact path="/restaurants" component={Restaurants}/>
          <Route component={NotFound} />
          <div className="App-header">
            <h1>RestFull LA!</h1>

            {fetchData ? <p>fetchData</p> : <Welcome />}
            </div>
          </div>
      </Router>
    );
  }
}

export default connect()(App);
