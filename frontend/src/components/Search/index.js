import { connect } from 'react-redux';
import { actionCreators as userActions } from 'redux/modules/user.js';
import Container from './container';

const mapStateToProps = (stae, ownProps) => {
    const { user: {userList, imageList}} = stae;
    return {
        imageList,
        userList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match : { params: {searchByTerm} }} = ownProps;
    return {
        searchByTerm: () => {
            dispatch(userActions.searchByTerm(searchByTerm));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);