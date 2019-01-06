import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {getData: true, restaurantData: []}
  render() {
    const{ getData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>RestFULL LA!</h2>
        </header>
          <p>
            {getData ? <p>get data</p> : <p>don't get data</p> }
          </p>

      </div>
    );
  }
}

export default App;
