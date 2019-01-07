import React, { Component } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button as SUIButton } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {fetchData: true, restaurantData: []}
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

export default App;
