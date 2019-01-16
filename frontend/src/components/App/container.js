import React from 'react';
import App from './presenter';

//container presenter patterns
// index.js => gets data from the redux store and mapStateToProps to Container Commponent.
// container.js => send data to the Presenter Component
// presenter.js => displays data

const Container = props => <App {...props}/>;

export default Container;