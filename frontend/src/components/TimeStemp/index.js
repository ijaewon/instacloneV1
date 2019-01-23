import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

const TimeStemp = (props, context) => props.time;

TimeStemp.prototype = {
    time: propTypes.string.isRequired,
};

export default TimeStemp;