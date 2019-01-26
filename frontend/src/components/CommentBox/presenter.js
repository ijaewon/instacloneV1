import React from 'react';
import propTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import './styles.scss';

const CommentBox = (props, context) => (
    <form className="comment-box">
        <Textarea 
            className="input"
            placeholder={context.t("Add a comment...")}
            value={props.comment}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyPress}
        />
    </form>
)

CommentBox.contextTypes = {
    t: propTypes.func.isRequired
};

CommentBox.propTypes = {
    handleInputChange: propTypes.func.isRequired,
    handleKeyPress: propTypes.func.isRequired,
    comment: propTypes.string.isRequired,
    photoId: propTypes.number.isRequired,
};

export default CommentBox;