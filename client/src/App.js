import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import PickContainer from './containers/pickContainer'
import { RestaurantsContainer } from './containers/restaurantsContainer'
import { fetchRestaurantData } from './actions/restaurants'
import { endDataFetch } from './actions/dataFetch'
import Hungry from './components/hungry'
import Welcome from './components/welcome'
import GoodBye from './components/goodbye'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurantData();
  }
  render() {
    const { dataFetch } = this.props
    return (
      <Router>
        <Container className="col-sm-12">
          <Row>
              <Col className="text-center">
                <h1>RestFull LA!</h1>
                <p>The app that helps the restless and empty in LA to rest and be full in LA!</p>
              </Col>
          </Row>
          <Row>
            {dataFetch ?
              <h4>loading...</h4>:
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
