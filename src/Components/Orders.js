import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { getData, getSuburbs, getMaterials, getColours } from '../services/Product'


class Orders extends Component {

    componentDidMount() {
        getData().then(data => this.setState({data: data}))
        getSuburbs().then(data => this.setState({suburbs: data}))
        getMaterials().then(data => this.setState({material: data}))
        getColours().then(data => this.setState({colour: data}))
        console.log('orders loaded')
    }
    constructor(props) {
        super(props)
        this.state = {data: null}
    }

    render() {
        const {data, suburbs, material, colour} = this.state
        let suburbName = ''
        let materialName = ''
        let colourName = ''
        if( data && suburbs){
            const resultArray = suburbs.filter(item => item.id === data.suburb)
            if(resultArray.length > 0) {
                suburbName = resultArray[0].name
            }
        }
        if( data && material){
            const resultArray = material.filter(item => item.id === data.material)
            if(resultArray.length > 0) {
                materialName = resultArray[0].name
            }
        }
        if( data && colour){
            const resultArray = colour.filter(item => item.id === data.colour)
            if(resultArray.length > 0) {
                colourName = resultArray[0].name
            }
        }
        return (
            <div>
                <text>{console.log(colourName)}</text>
                <Typography variant='display1'>
                    Orders
                </Typography>
                {/* <List>
                    <ListItem>
                        {data? data.name :null }
                    </ListItem>
                    <ListItemText style={{margin:20}}>
                        {data&&suburbs? (suburbs.filter(item => {
                            if(item.id === data.suburb) {
                                return true
                            }else{
                                return false
                            }
                            }))[0].name 
                            : null
                        }
                        &nbsp;
                        {data&&material? (material.filter(item => {
                            if(item.id === data.material) {
                                return true
                            }else{
                                return false
                            }
                            }))[0].name 
                            : null
                        } 
                        &nbsp;
                        {data&&colour? (colour.filter(item => {
                            if(item.id === data.colour) {
                                return true
                            }else{
                                return false
                            }
                            }))[0].name 
                            : null
                        } 
                        &nbsp;
                    </ListItemText>
                    <ListItem style={{margin:20}}>
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.room}</ListItemText>
                        }) :null }
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.length}</ListItemText>
                        }) :null }
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.width}</ListItemText>
                        }) :null }
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.pleats}</ListItemText>
                        }) :null }
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.style}</ListItemText>
                        }) :null }
                        {data? data.rows.map(function(element, index) {
                            return <ListItemText>{element.notes}</ListItemText>
                        }) :null }
                    </ListItem>
                </List> */}

                <Paper style={styles.root}>
                    <TableHead style={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell numeric>Suburb</TableCell>
                                <TableCell numeric>Material</TableCell>
                                <TableCell numeric>Colour</TableCell>
                                <TableCell numeric>Protein</TableCell>
                                <TableCell numeric>Room</TableCell>
                                <TableCell numeric>Length</TableCell>
                                <TableCell numeric>Width</TableCell>
                                <TableCell numeric>Style</TableCell>
                                <TableCell numeric>Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    {data? data.name :null }
                                </TableCell>
                                <TableCell>
                                    {suburbName}
                                </TableCell>
                                <TableCell>
                                    {materialName}
                                </TableCell>
                                <TableCell>
                                    {colourName} 
                                </TableCell>
                                {/* <TableRow> */}
                                {data? data.rows.map(function(element, index) {
                                    return <TableCell>{element.room}</TableCell>
                                }) :null }
                                {data? data.rows.map(function(element, index) {
                                return <TableCell>{element.length}</TableCell>
                                }) :null }
                                {data? data.rows.map(function(element, index) {
                                    return <TableCell>{element.width}</TableCell>
                                }) :null }
                                {data? data.rows.map(function(element, index) {
                                    return <TableCell>{element.pleats}</TableCell>
                                }) :null }
                                {data? data.rows.map(function(element, index) {
                                    return <TableCell>{element.style}</TableCell>
                                }) :null }
                                {data? data.rows.map(function(element, index) {
                                    return <TableCell>{element.notes}</TableCell>
                                }) :null }
                                {/* </TableRow> */}
                            </TableRow> 
                        </TableBody>
                    </TableHead>
                </Paper>
            </div>
        )
    }
}

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
}

export default Orders