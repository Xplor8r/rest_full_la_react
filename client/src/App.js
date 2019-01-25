import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRestaurantData } from './actions/restaurants'

import PickContainer from './containers/pickContainer'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import showContainer from './containers/showContainer'

import Hungry from './components/hungry'
import Welcome from './components/welcome'
import GoodBye from './components/goodbye'

import { Media, Row, Container } from 'reactstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './images/spinning_plate.png'
import header from './images/RestFullLA.jpg'

class App extends Component {
  componentWillMount() {
    this.props.fetchRestaurantData();
  }

  render() {
    const { dataFetch } = this.props
    return (
      <Router>
        <div className="wrapper">
          <header className="header">
            <Container>
              <p><Media src={header} alt="Rest Full LA" /></p>
              <h3>The app that helps the restless and empty in LA to REST and be FULL in LA!</h3>
            </Container>
          </header>
          <Container className="content">
            <Row className="justify-content-sm-center"> 
              {dataFetch ?
                <Media src={logo} className="App-logo" alt="logo" />:
                <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route exact path="/hungry" component={Hungry}/>
                  <Route exact path="/pick/:id" component={PickContainer}/>
                  <Route exact path="/restaurants" component={RestaurantsContainer}/>
                  <Route exact path="/goodbye" component={GoodBye} />
                  <Route exact path="/show" component={showContainer}/>
                </Switch>}
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataFetch: state.dataFetch,
    restaurantData: state.restaurantData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurantData: () => dispatch(fetchRestaurantData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
