import React from 'react'
import Post from './Post'
import Grid from '@material-ui/core/Grid'

export default function PostList({ theme, filter, postList, postListExample }) {

    const postListFiltered = postList.filter(post => {
        if(filter === 'All'){
            return true
        }
        return post.category === filter
    })

    return (
        <Grid container justifyContent="center" alignItems="center" >
            {postListFiltered.map(post => (
                <Post post={post} key={post.id} theme={theme} />
            ))}
        </Grid>
       
    )
}