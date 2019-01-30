import { connect } from 'react-redux';
import { actionCreators as userActions } from 'redux/modules/user.js';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        Logout: () => {
            dispatch(userActions.logout());
        }
    }
}

export default connect(null, mapDispatchToProps)(Container)