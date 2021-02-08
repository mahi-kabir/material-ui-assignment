import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const PostDetail = () => {
    const{postId} = useParams()
    const[post,setPost] = useState([])
    

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setPost(data))
    },[])

    const history = useHistory()
   const handleLink = () =>{
        history.push(`/comments/postId=${postId}`)
   }

   const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <h1>This is post detail component: {postId}</h1>
            <h3>UserId: {post.userId}</h3>
            <h3>ID: {post.id}</h3>
            <h5>{post.body}</h5>
            <Button variant="contained" color="secondary" onClick = {()=>handleLink(postId)}>see comments of post {postId}</Button>
            
        
            
            
            
        </div>
    );
};

export default PostDetail;