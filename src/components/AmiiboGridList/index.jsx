import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ImageList, GridListTile, ImageListItemBar, IconButton  } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-arround',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
    },
    title: {
        color: 'write'
    }, 
    titleBar: {
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    linkStyle: {
        color: 'white'
    }
}))

export function AmiiboGridList({items}){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <ImageList className={classes.gridList} cols={6.0}>
                {
                    items.map(item => (
                        <GridListTile key={item.head + item.tail}>
                            <img src={item.image} alt={item.name} height={40} />
                            <ImageListItemBar title={item.name} classes={{
                                root: classes.titleBar, title: classes.title}} actionIcon={
                                    <IconButton aria-label={`${item.character} details`}>
                                        <Link to={`/caracters/${item.head + item.tail}`} className={classes.linkStyle}>
                                            <Info/>
                                        </Link>
                                    </IconButton>
                                }
                                />
                        </GridListTile>
                    ))
                }
            </ImageList>
        </div>
    )
}