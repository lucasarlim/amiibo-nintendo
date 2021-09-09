import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { AmiiboGridList } from '../../components/AmiiboGridList';

const useStyles = makeStyles(theme => ({
    title: {
        textAlignVertical: "center",
        textAlign: "center"
    }
}))

export function AmiiboCaracters(){
    
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
        fetch("https://www.amiiboapi.com/api/amiibo").then(response => {
            response.json().then(data => {
                setList1(data.amiibo.slice(0, 12))
                setList2(data.amiibo.slice(12, 24))
                console.log(data)
            })
        })
    },[])
    return(
        <div>
            <h2 className={classes.title}>Main Caracters</h2>
            <AmiiboGridList items={list1} />
            <h2 className={classes.title}>Secondary Caracters</h2>
            <AmiiboGridList items={list2} />
        </div>
    )
}