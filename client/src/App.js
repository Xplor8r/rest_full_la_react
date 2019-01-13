import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
// import WelcomeContainer from './containers/welcomeContainer'
import { Pick } from './components/pick'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import { fetchRestaurantData } from './actions/restaurants'
import { endDataFetch } from './actions/dataFetch'
// import { Button } from 'reactstrap';
import Hungry from './components/hungry'
import Welcome from './components/welcome'
import NoRestaurantFound from './components/noRestaurant'


class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurantData();
  }
  render() {
    const { dataFetch } = this.props
    return (
      <Router>
         <div className="App">
              <div className="App-header">
                <h1>RestFull LA!</h1>
                <h4>the app that helps the restless and empty in LA to rest and be full in LA!</h4>
                <div className="App-info">
                  {dataFetch ?
                    <h4>loading...</h4>:
                    <Switch>
                      <Route exact path="/" component={Welcome}/>
                      <Route exact path="/hungry" component={Hungry}/>
                      <Route exact path="/pick" component={Pick}/>
                      <Route exact path="/restaurants" component={RestaurantsContainer}/>
                      <Route exact path="/noRestaurant" component={NoRestaurantFound} />
                    </Switch>}
                </div>
              </div>

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
    endDataFetch: () => dispatch(endDataFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
