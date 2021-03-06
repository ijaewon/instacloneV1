import React from 'react';
import propTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import './styles.scss';

const PhotoActions = (props, context) => (
    <div className="action">
      <div className="icons">
        <span className="icon" onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <Ionicon icon="ios-heart" fontSize="28px" color="#EB4B59" />
        ) : (
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
        )}
        </span>
        <span className="icon">
          <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
        </span>
      </div>
      <span className="likes" onClick={props.openLikes}>
        {props.number}{" "}
        {props.number === 1 ? context.t("like") : context.t("likes")}
      </span>
    </div>
  );
  

PhotoActions.propTypes = {
    number: propTypes.number.isRequired,
    isLiked: propTypes.bool.isRequired,
    photoId: propTypes.number.isRequired,
    handleHeartClick: propTypes.func.isRequired,
    openLikes: propTypes.func.isRequired,
};

PhotoActions.contextTypes = {
    t: propTypes.func.isRequired
  };

export default PhotoActions;