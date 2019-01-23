import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

const TimeStemp = (props, context) => (
    <span className="time">{props.time}</span>
  );
  
  TimeStemp.propTypes = {
    time: propTypes.string.isRequired
  };
  
  TimeStemp.contextTypes = {
    t: propTypes.func.isRequired
  };

export default TimeStemp;