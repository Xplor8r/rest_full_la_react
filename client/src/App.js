import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { Media, Row, Col } from 'reactstrap';
import PickContainer from './containers/pickContainer'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import { fetchRestaurantData } from './actions/restaurants'
import { endDataFetch } from './actions/dataFetch'
import Hungry from './components/hungry'
import Welcome from './components/welcome'
import GoodBye from './components/goodbye'
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
        <div className="App">
          <div className="App-header">
                <Media style={{height: 200}} src={header} alt="rest full L A" />
                <h3 className="title">The app that helps the restless and empty in LA to rest and be full in LA!</h3>
          </div>
            <div className=" App-info">
              {dataFetch ?
                <Row>
                  <Col><Media src={logo} className="App-logo" alt="logo" /></Col>
                </Row>:
                <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route exact path="/hungry" component={Hungry}/>
                  <Route exact path="/pick" component={PickContainer}/>
                  <Route exact path="/restaurants" component={RestaurantsContainer}/>
                  <Route exact path="/goodbye" component={GoodBye} />
                </Switch>}
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
