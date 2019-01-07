import React, { Component } from 'react';
// import  { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
// import { getRestraurantData } from './actions/restaurants'
// import { Button } from 'reactstrap';

class App extends Component {
  state = {fetchData: true, restaurantData: []}
  componentDidMount() {
    return fetch(`RailsApi/restaurants`)
    .then(response => response.json())
    .then(restaurants => {
        console.log(restaurants)
    })
  }
  render() {
    const {fetchData} = this.state;
    return (

      <div className="App">
        <div className="App-header">
        <h1>RestFull LA!</h1>

        {fetchData ? <p>fetchData</p> : <p>not fetchData</p>}
        </div>
      </div>
    );
  }
}

export default connect()(App);
