import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'


export default function Header({ theme }) {


    return (
        <>
        <Grid container justifyContent="center" alignItems="flex-end" style={theme.containerFirstTitle}>
            <Grid item>
                <div style={theme.openFirstTitle} />
            </Grid>
            <Grid item>
                <Typography variant="h6" style={theme.firstTitle} >Making your Life Easier</Typography>
            </Grid>
            <Grid item>
                <div style={theme.closeFirstTitle} />
            </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-end" style={theme.containerSecondTitle}>
            <Typography variant="h3" style={theme.secondTitle} >Discovering the World</Typography>
        </Grid>
        </>
    )
}