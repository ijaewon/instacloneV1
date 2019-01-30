import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import Loading from '../Loading';
import Ionicon from 'react-ionicons';
import UserDisplay from "../UserDisplay";

const UserList = props => (
    <div className="container">
      <div className="bos">
        <header className="header">
          <h4 className="title">{props.title}</h4>
          <span onClick={props.closeLikes}>
            <Ionicon icon="md-close" fontSize="20px" color="black" />
          </span>
        </header>
        <div className="content">
          {props.loading ? <Loading /> 
          :<RenderUsers list={props.userList} />}
        </div>
      </div>
    </div>
  );
  
  const RenderUsers = props =>
    props.list.map(user => <UserDisplay user={user} key={user.id} />);
  
  RenderUsers.propTypes = {
    list: propTypes.array
  };

UserList.propTypes = {
    title: propTypes.string.isRequired,
    loading: propTypes.bool.isRequired,
    userList: propTypes.array,
    closeLikes: propTypes.func.isRequired,
};

export default UserList;