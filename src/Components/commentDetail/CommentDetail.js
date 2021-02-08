import React from 'react';
import { Link } from 'react-router-dom';

const CommentDetail = (props) => {
    const{postId,name,email} = props.commentt
    return (
        <div>
            <h2>PostID: {postId}</h2>
            <h3>Name: {name}</h3>
            <Link to = {`/comments?postId=${postId}`}>see comments of {postId}</Link>
        </div>
    );
};

export default CommentDetail;