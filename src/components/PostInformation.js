import React from 'react'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Comment from './Comment'
import WriteComment from './WriteComment'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

export default function PostInformation({post}) {

    const useInfoStyles = makeStyles({
        infoTitleContainer: {
            marginTop: '20px',
            height: '350px',
            backgroundImage: `url(${post.imageURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            paddingLeft: '2vw',
            paddingRight: '2vw',
        },
        postInfoTitleContainer: {
            height:'250px',
        },
        postInfoTitle:{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',           
        },
        viewPostsContainer: {
            height:'50px',
        },
        viewPosts: {
            fontSize: '16px',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
                cursor: 'pointer',
            },
        },
        InfoDescriptionContainer: {
            backgroundColor: '#ededed',
            padding: '30px 10%',
        },
        postInfoDescription: {
            margin: '20px 0',

        },
        commentsContainer: {
            width: '500px',
            margin: '20px 0 40px 0',
        },
        commentsTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        
    })

    const classes = useInfoStyles()

    return (
        <>
        <Grid container direction="column" justifyContent="flex-start" alignItems="center"
            className={classes.infoTitleContainer}
        >
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center"
                className={classes.viewPostsContainer}
            >
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Grid item >
                    <Typography variant="h6" className={classes.viewPosts} >&#60; View Posts</Typography>
                </Grid>
                </Link>
            </Grid>
            <Grid container item direction="row" justifyContent="center" alignItems="center"
                className={classes.postInfoTitleContainer}
            >
                <Typography variant="h3" className={classes.postInfoTitle} >{post.title}</Typography>
            </Grid>
        </Grid>

        <Grid container direction="column" justifyContent="flex-start" alignItems="center"
            className={classes.InfoDescriptionContainer}
        >   
            <Grid item >
                <Typography variant="h5" className={classes.postInfoDescription} >{post.description}</Typography>
            </Grid> 
            <Grid container item direction="column" justifyContent="flex-start" alignItems="flex-start"
                className={classes.commentsContainer}
            >
                <Grid item >
                    <Typography variant="h6" className={classes.commentsTitle} >Comments</Typography>
                </Grid> 
                {
                    post.comments.map((comment, i) => (
                        <Comment key={i} comment={comment} />
                    ))
                }
                <WriteComment id={post.id}/>
            </Grid>
        </Grid>
        </>
    )
}
