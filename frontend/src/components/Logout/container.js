import React, { Component } from 'react';
import Logout from './presenter';

class Container extends Component{
    render () {
        return (
            <Logout 
                {...this.props}
                logout={this._handleLogout}
            />
        )
    }
    _handleLogout = () => {
        const { Logout } = this.props;
        Logout();
    }  
}

export default Container;