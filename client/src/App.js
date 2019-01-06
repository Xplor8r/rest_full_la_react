import React, { Component } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button as SUIButton } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <header className="App-header">
        <h1>RestFull LA!</h1>
          <p>
          </p>

        </header>
      </div>
    );
  }
}

export default App;
