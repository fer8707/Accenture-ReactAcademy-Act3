import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/post/postActions';

export default function WriteComment({id}) {

    const dispatch = useDispatch()
    const [comment, setComment]= useState('')

    const useInfoStyles = makeStyles({
        textfield: {
            marginTop: '20px',
        },
        button: {
            marginTop: '20px',
            textTransform: 'none',
            fontWeight: 'bold'
        }
    })

    const classes = useInfoStyles()

    const handleChange = e => {
        const {value} = e.target;
        setComment(value)
    }

    const saveComment = () => {
        if(
          comment !== ""    
        ){
            dispatch(addComment({comment:comment, id:id}))
            setComment('')
        }
      }

    return (
        <>
            <TextField 
              margin="dense"
              name="title"
              id="title"
              placeholder="Write a comment"
              type="text"
              fullWidth
              onChange={handleChange}
              value={comment}
              className={classes.textfield}
            />
            <Button variant="contained" onClick={saveComment} color="primary" className={classes.button}>
              Add
            </Button>
        </>
    )
}
