import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import PickContainer from './containers/pickContainer'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import { fetchRestaurantData } from './actions/restaurants'
import { endDataFetch } from './actions/dataFetch'
// import { Button } from 'reactstrap';
import Hungry from './components/hungry'
import Welcome from './components/welcome'
import GoodBye from './components/goodbye'
import ModalMap from './components/modal'
import "bootstrap/dist/css/bootstrap.min.css";

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
                      <Route exact path="/modal" component={ModalMap}/>
                      <Route exact path="/" component={Welcome}/>
                      <Route exact path="/hungry" component={Hungry}/>
                      <Route exact path="/pick" component={PickContainer}/>
                      <Route exact path="/restaurants" component={RestaurantsContainer}/>
                      <Route exact path="/goodbye" component={GoodBye} />
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
