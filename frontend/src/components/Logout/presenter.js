import React from 'react';

const Logout = props => (
    <div className="button">         
        <button onClick={props.logout}>
            logout    
        </button>     
    </div>
);

export default Logout;