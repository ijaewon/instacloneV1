import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import Loading from '../Loading';

const Feed = props => {
    if(props.loading){
        return <LoadingFeed />;
    }
};

const LoadingFeed = props => (
    <div className="feed">
        <Loading />
    </div>
)

Feed.propTypes={
    loading: propTypes.bool.isRequired,
}

export default Feed;