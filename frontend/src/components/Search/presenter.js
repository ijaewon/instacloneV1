import React from "react";
import propTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";

const Search = (props, context) => {
    return (
      <div className="search">
        <div className="section">
          <h4 className="title">{context.t("Users")}</h4>
          {props.loading && <Loading />}
          {!props.loading &&
            props.userList.length < 1 && (
              <NotFound text={context.t("Nothing found :(")} />
            )}
          <div className="content">
            {!props.loading &&
              props.userList.length > 0 && (
                <RenderUserSearch userList={props.userList} />
              )}
          </div>
        </div>
        <div className="section">
          <h4 className="title">{context.t("Photos")}</h4>
          {props.loading && <Loading />}
          {!props.loading &&
            props.imageList.length < 1 && (
              <NotFound text={context.t("Nothing found :(")} />
            )}
          <div className="content">
            {!props.loading &&
              props.imageList.length > 0 && (
                <RenderImageSearch imageList={props.imageList} />
              )}
          </div>
        </div>
      </div>
    );
  };
  
  const RenderUserSearch = props =>
    props.userList.map(user => (
      <UserDisplay vertical={true} user={user} key={user.id} />
    ));
  
  const RenderImageSearch = props =>
    props.imageList.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);
  
  const NotFound = props => <span className="not-found">{props.text}</span>;
  
  Search.contextTypes = {
    t: propTypes.func.isRequired
  };
  
  Search.propTypes = {
    loading: propTypes.bool.isRequired,
    imageList: propTypes.array,
    userList: propTypes.array
  };
  
  export default Search;