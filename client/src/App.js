import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import WelcomeContainer from './containers/welcomeContainer'
import Pick from './components/pick'
import Restaurants from './components/restaurants'
import { fetchRestaurantData } from './actions/restaurants'
// import { Button } from 'reactstrap';
import Hungry from './components/hungry'
// import Welcome from './components/welcome'
import NoRestaurantFound from './components/noRestaurant'


class App extends Component {
  state = {fetchData: false, restaurantData: []}

  componentDidMount() {
    this.props.fetchRestaurantData();
  }
  render() {
    return (
      <Router>
         <div className="App">
            <Switch>
              <Route exact path="/hungry" component={Hungry}/>
              <Route exact path="/pick" component={Pick}/>
              <Route exact path="/restaurants" component={Restaurants}/>
              <Route exact path="/noRestaurant" component={NoRestaurantFound} />
            </Switch>
              <div className="App-header">
                <h1>RestFull LA!</h1>
                <h4>the app that helps the restless and empty in LA to rest and be full in LA!</h4>
                <WelcomeContainer />
                {/* <Route exact path="/" component={Welcome}/>
                <Route exact path="/hungry" component={Hungry}/> */}
                {/* <h5>Are you in LA?</h5>
                <Link to="/hungry"><Button>Yes</Button></Link> */}
                {/* <Route exact path="/welcome" component={Welcome}/> */}
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