import React from 'react';
import propTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import './styles.scss';

const CommentBox = (props, context) => (
    <form className="comment-box">
        <Textarea 
            className="input"
            placeholder={context.t("Add a comment...")}
        />
    </form>
)

CommentBox.contextTypes = {
    t: propTypes.func.isRequired
};

export default CommentBox;