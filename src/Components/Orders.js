import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

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
                <Typography variant='display1'>
                    Orders
                </Typography>
                <Paper style={styles.root}>
                    <TableHead style={styles.table}>
                        <TableRow>
                            <TableCell numeric>Customer Name</TableCell>
                            <TableCell numeric>Suburb</TableCell>
                            <TableCell numeric>Material</TableCell>
                            <TableCell numeric>Colour</TableCell>
                        </TableRow>
                    </TableHead>
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
                        </TableRow>
                </Paper>
                <Paper style={styles.root}>
                    <TableBody>
                        <TableRow>
                            {data? data.rows.map(function(element, index) {
                                return (
                                    <TableRow numeric key={element}>
                                        <TableCell>Room:  {element.room}</TableCell>
                                        <TableCell>Length:  {element.length}</TableCell>
                                        <TableCell>Width:  {element.width}</TableCell>
                                        <TableCell>Style:  {element.style}</TableCell>
                                        <TableCell>Notes:  {element.notes}</TableCell>
                                    </TableRow>
                                    )
                            }) :null }
                        </TableRow>
                    </TableBody>
                </Paper>
            </div>  
        )
    }
}

const styles = {
    root: {
        width: '80%',
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      }
}

export default Orders