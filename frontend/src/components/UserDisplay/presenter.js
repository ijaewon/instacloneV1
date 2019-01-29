import React from "react";
import propTypes from "prop-types";
import "./styles.scss";

const UserRow = (props, context) => (
  <div className="container">
    <div className="column">
      <img
        src={props.user.profile_image || require("images/noPhoto.jpg")}
        alt={props.user.username}
        className={props.big ? "bigAvatar" : 'avatar'}
      />
      <div className="user">
        <span className="username">{props.user.username}</span>
        <span className="name">{props.user.name}</span>
      </div>
    </div>
    <span className="column">
      <button className="button" onClick={props.handleClick}>
        {props.user.following ? context.t("Unfollow") : context.t("Follow")}
      </button>
    </span>
  </div>
);

UserRow.contextTypes = {
  t: propTypes.func.isRequired
};

UserRow.propTypes = {
  user: propTypes.shape({
    id: propTypes.number.isRequired,
    profile_image: propTypes.string,
    username: propTypes.string.isRequired,
    name: propTypes.string,
    following: propTypes.bool.isRequired
  }).isRequired,
  big: propTypes.bool,
  handleClick: propTypes.func.isRequired
};

UserRow.defaultProps = {
  big: false
};

export default UserRow;