import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import Loading from '../Loading';

const Feed = props => {
    if(props.loading){
        return <LoadingFeed />;
    }else if(props.feed){
        return <RenderFeed {...props} />;
    }
};

const LoadingFeed = props => (
    <div className="feed">
        <Loading />
    </div>
);

const RenderFeed = props => (
    <div className="feed">{props.feed.map(post => post.caption)}</div>
);

Feed.propTypes={
    loading: propTypes.bool.isRequired,
};

export default Feed;