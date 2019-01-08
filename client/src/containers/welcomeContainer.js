import React from 'react';
import  { BrowserRouter as Route, Switch} from 'react-router-dom'
import Welcome from '../components/welcome'
import Hungry from '../components/hungry'

class WelcomeContainer extends React.Component {
    render() {
        return (
            <div>
                <p>welcome</p>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/hungry" component={Hungry} />
                </Switch>
            </div>
        )
    }
}

export default WelcomeContainer