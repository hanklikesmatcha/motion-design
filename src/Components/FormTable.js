import React, { Component } from 'react'
import ReactDataGrid from "react-data-grid"
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import { postData } from '../services/Product'

  

class FormTable extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [
            { key: "selected", name: "", width: 20},
            { key: "room", name: "Room", editable: true, width: 250},
            { key: "length", name: "Length", editable: true, width: 100 },
            { key: "width", name: "Width", editable: true, width: 100 },
            { key: "pleats", name: "Pleats", editable: true, width: 200 },
            { key: "style", name: "Style", editable: true, width: 200 },
            { key: "notes", name: "Notes", editable: true }
        ]
        let rows = []
        this.state = { rows, selectedIndexes: [] }
    }
    componentDidUpdate() {
        console.log('formTable loaded')
    }
    rowGetter = i => {
        return this.state.rows[i]
    }
    onRowsSelected = rows => {
        this.setState({
            selectedIndexes: this.state.selectedIndexes.concat(
            rows.map(r => r.rowIdx)
            )
        })
    }

    onRowsDeselected = rows => {
        let rowIndexes = rows.map(r => r.rowIdx)
        this.setState({
            selectedIndexes: this.state.selectedIndexes.filter(
            i => rowIndexes.indexOf(i) === -1
            )
        })
    }
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
          const rows = state.rows.slice()
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated }
            }
          return { rows }
        })
        this.getValue()
    }
    getValue() {
        // store data for the cells
    }

    addNewRow = () => {
        var addNewRows = this.state.rows
        // same structure
        addNewRows.push({
            room: "", 
            length: "", 
            width: "" , 
            pleats: "", 
            style: "", 
            notes: ""
        })
        this.setState(this.state.rows)
        this.setState(this.state.selectedIndexes)
        console.log('added new row')
    }
    deleteRow = () => { 
        console.log(this.state.selectedIndexes)
        this.state.rows.splice(this.state.selectedIndexes, 1)
        // this.state.rows.filter(function() {
        //     console.log(this.state.rows)
        //     if(this.state.rows === this.state.selectedIndexes) {
        //         return false
        //     } else {
        //         return true
        //     }
        // })
        this.setState(this.state.rows)
    }

    submit() {
        this.setState(this.props.getData)
        console.log(this.state)
        // post data to server
        const data = {data: this.state}
        postData(data)
    }

    render() {
        return (
            <div>
                <Typography variant='display1'>
                    Curtains
                </Typography>
    
                <ReactDataGrid
                    rowKey='id'
                    columns={this.columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    enableCellSelect={true}
                    minHeight={250}
                    rowHeight={50}
                    rowSelection={{
                        minWidth: 2000,
                        resizable: true,
                        showCheckbox: true,
                        enableShiftSelect: true,
                        onRowsSelected: this.onRowsSelected,
                        onRowsDeselected: this.onRowsDeselected,
                        selectBy: {
                            indexes: this.state.selectedIndexes
                        }
                    }}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                />
                <Button onClick={this.addNewRow} variant='contained' style={{float: 'right', margin: 20}}>Add</Button>
                <Button onClick={this.deleteRow} variant='outlined' color='secondary' style={{ margin: 20 }}>Back</Button>
                <Button onClick={()=> this.submit()} variant='outlined' color='primary' style={{ margin: 20 }}>Save all changes</Button>
            </div>
        )
    }
}

export default FormTable