import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {postId} = useParams()
    const[comment, setComment] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=/${postId}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return (
        <div>
            <h3>{comment.length}</h3>
        </div>
    );
};

export default Detail;