import React from 'react';
import propTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import './styles.scss';

const PhotoActions = (props, context) => (
    <div className="action">
      <div className="icons">
        <span className="icon">
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
        </span>
        <span className="icon">
          <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
        </span>
      </div>
      <span className="likes">
        {props.number}{" "}
        {props.number === 1 ? context.t("like") : context.t("likes")}
      </span>
    </div>
  );
  

PhotoActions.propTypes = {
    number: propTypes.number.isRequired,
};

PhotoActions.contextTypes = {
    t: propTypes.func.isRequired
  };

export default PhotoActions;