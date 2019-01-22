import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

const Feed = props => "FEED";

Feed.propTypes={
    loading: propTypes.bool.isRequired,
}

export default Feed;