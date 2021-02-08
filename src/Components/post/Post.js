import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Post = (props) => {
    const {id, body, title} = props.post
    const postStyle = {
        border:'4px solid purple',
        margin: '20px',
        marginLeft:'10px',
        borderRadius: '15px',
    }

    const history = useHistory();
    const handleClick = () =>{
        history.push(`/post/${id}`)
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
        <div className={classes.root} style = {postStyle}>
            <h3>Post ID: {id}</h3>
             <h4>Title: {title}</h4>
             <h4>{body}</h4>
             <Button variant="contained" color="primary" onClick={()=>handleClick(id)}>See more</Button>
             
        </div>
    );
};

export default Post;