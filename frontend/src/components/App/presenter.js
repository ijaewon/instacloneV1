import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import Footer from '../Footer';
import Auth from '../Auth';

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
    <Footer key={3}/>
]

App.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" render={()=>"feed"}/>
        <Route exact path="/explore" render={()=>"explore"}/>
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/forgot" render={()=>"password"}/>
    </Switch>
)

export default App;
