import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Badge } from 'reactstrap';
import PickContainer from './containers/pickContainer'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import { fetchRestaurantData } from './actions/restaurants'
import { endDataFetch } from './actions/dataFetch'
import Hungry from './components/hungry'
import Welcome from './components/welcome'
import GoodBye from './components/goodbye'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurantData();
  }
  render() {
    const { dataFetch } = this.props
    return (
      <div className="App">
        <Router>
          <Container className="App-header col-sm-12">
            <Row>
                <Col className="text-center">
                  <h1><Badge color="secondary" pill>RestFull LA!</Badge></h1>
                  <h3>The app that helps the restless and empty in LA to rest and be full in LA!</h3>
                </Col>
            </Row>
            <Row className=" App-info">
              {dataFetch ?
                <Col className="text-center">
                  <h5>Loading...</h5>
                </Col>:
                <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route exact path="/hungry" component={Hungry}/>
                  <Route exact path="/pick" component={PickContainer}/>
                  <Route exact path="/restaurants" component={RestaurantsContainer}/>
                  <Route exact path="/goodbye" component={GoodBye} />
                </Switch>}
            </Row>
          </Container>
        </Router>
      </div>
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
