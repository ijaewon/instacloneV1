import React from "react";
import propTypes from "prop-types";
import Ionicon from "react-ionicons";
import "./styles.scss";

const PhotoDisplay = props => (
  <div className="container">
    <img
      src={props.photo.file}
      className="photo"
      alt={"Something else"}
    />
    <div className="overlay">
      <span className="data">
        <Ionicon icon="ios-heart" fontSize="22px" color="white" />{" "}
        {props.photo.like_count}
      </span>
      <span className="data">
        <Ionicon icon="ios-text" fontSize="22px" color="white" />{" "}
        {props.photo.comment_count}
      </span>
    </div>
  </div>
);

PhotoDisplay.propTypes = {
  photo: propTypes.shape({
    file: propTypes.string.isRequired,
    comment_count: propTypes.number.isRequired,
    like_count: propTypes.number.isRequired
  }).isRequired
};

export default PhotoDisplay;