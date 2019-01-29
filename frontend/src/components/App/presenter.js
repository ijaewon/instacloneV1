import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import Footer from '../Footer';
import Auth from '../Auth';
import Navigation from '../Navigation';
import Feed from '../Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
    <Footer key={3}/>
]

App.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/search/:searchTerm" component={Search}/>
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/forgot" render={()=>"password"}/>
    </Switch>
)

export default App;
