import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { postId } = useParams();
    
    const postStyle = {
        border: '4px solid purple',
        margin: '20px',
        marginLeft: '10px',
        borderRadius: '15px',
    }

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h2>Comments: {comments.length}</h2>
        {
            comments.map(comment => (
                <div style={postStyle}>
                    
                    <h3>PostId: {postId} </h3>
                    <h3>Email: {comment.email}</h3>
                    <h3> {comment.body}</h3>
                </div>
            ))
        }
    </div>
    );
    
};

export default Comments;