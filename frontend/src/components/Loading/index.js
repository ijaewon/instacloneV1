import React from 'react';
import './styles.scss';

const Loading = props => (
    <div className="container">
        <img 
            className="spinner"
            src={require("images/loading.png")}
            alt="loading"
        />
    </div>
);

export default Loading;