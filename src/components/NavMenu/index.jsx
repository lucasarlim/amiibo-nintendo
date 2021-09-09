import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    menuButton: {marginRight: 2},
    title: {flexGrow: 1}
}))

export function NavMenu(){

    const classes = useStyles();

    return(
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit">
                    <Link to='/' style={{color: "white"}}> <Menu/> </Link>
                </IconButton>
                <Typography variant="h6" className={classes.title}> Amiibo </Typography>

            </Toolbar>
        </AppBar>
    )
}