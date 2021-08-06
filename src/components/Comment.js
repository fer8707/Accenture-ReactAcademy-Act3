import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from "@material-ui/core/styles";

export default function Comment({comment}) {

    const useInfoStyles = makeStyles({
        commentContainer: {
            margin: '0 0 20px 0',
        },
        commentsTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        paper: {
            width: '500px',
        },
        userIcon: {
            fontSize: '30px',
            padding: '8px 8px 0 8px',
        },
        username: {
            fontSize: '16px',
            fontWeight: 'bold',
            paddingTop: '8px'
        },
        commentText:{
            padding: '0 20px 10px 50px ',
            fontSize: '15px',
            lineHeight: '1.3',
        },
    })

    const classes = useInfoStyles()


    return (
        <Grid container item direction="column" justifyContent="flex-start" alignItems="flex-start" className={classes.commentContainer}>
            <Paper className={classes.paper}>
                <Grid container item direction="row" justifyContent="flex-start" alignItems="center">
                    <AccountCircleIcon variant="h6" className={classes.userIcon} />
                    <Typography variant="h6" className={classes.username} >Jon Doe</Typography>
                </Grid>
                <Grid container item direction="row" justifyContent="flex-start" alignItems="center">
                    <Typography variant="h6" className={classes.commentText} >{comment}</Typography>
                </Grid> 
            </Paper>
        </Grid>
    )
}
