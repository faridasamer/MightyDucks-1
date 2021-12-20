import React from 'react'
import { Grid } from '@mui/material'
import UserSearch from '../../components/UserSearch'

function Home() {
    return (
        <Grid container sx={{mt:5}} >
            <UserSearch />
            
        </Grid>
    )
}

export default Home
