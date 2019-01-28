import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import PhotoActions from '../PhotoActions';
import PhotoComments from '../PhotoComments';
import TimeStemp from '../TimeStemp';
import CommentBox from '../CommentBox';
import UserList from '../UserList';

const FeedPhoto = (props, context) => {
    console.log(props);
    return (
    <div className="feed-photo">
        <header className="header">
            <img 
                className="profile-img-size"
                src={props.creator.profile_image || require("images/noPhoto.jpg")}
                alt={props.creator.username}
            />
            <div className="header-column">
                <span className="creator">{props.creator.username}</span>
                <span className="location">{props.location}</span>
            </div>
        </header>
        <img 
            className="img-size"
            src={props.file} 
            alt={props.cation}
        />
        <div className="meta">
            <PhotoActions
                number={props.like_count}
                isLiked={props.is_liked}
                photoId={props.id}
                openLikes={props.openLikes}
            />  
            <PhotoComments
                caption={props.caption}
                creator={props.creator.username}
                comments={props.comments}
             />
             <TimeStemp time={props.natural_time}/>
             <CommentBox 
                photoId={props.id}
             />
        </div>
        {props.seeingLikes && (
        <UserList title="Likes" closeLikes={props.closeLikes} />
      )}
    </div>
    );
};

FeedPhoto.propTypes = {
    creator: propTypes.shape({
        profile_image: propTypes.string,
        username: propTypes.string.isRequired,
    }).isRequired,
    location: propTypes.string.isRequired,
    file: propTypes.string.isRequired,
    like_count: propTypes.number.isRequired,
    caption: propTypes.string.isRequired,
    comments: propTypes.arrayOf(
        propTypes.shape({
            message: propTypes.string.isRequired,
            creator: propTypes.shape({
                profile_image: propTypes.string,
                username: propTypes.string.isRequired,
            }).isRequired,            
        })
    ).isRequired,
    natural_time: propTypes.string.isRequired,
    is_liked: propTypes.bool.isRequired,
    seeingLikes: propTypes.bool.isRequired,
    openLikes: propTypes.func.isRequired,
    closeLikes: propTypes.func.isRequired,
    likes: propTypes.arrayOf(
        propTypes.shape({
          profile_image: propTypes.string,
          username: propTypes.string.isRequired,
          name: propTypes.string
        }).isRequired
    )
}

export default FeedPhoto;