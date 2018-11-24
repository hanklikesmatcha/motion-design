import React, { Component } from 'react'
import ReactDataGrid from "react-data-grid"
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import { postData } from '../services/Product'

const columns = [
    { key: "room", name: "Room", editable: true },
    { key: "length", name: "Length", editable: true },
    { key: "width", name: "Width", editable: true },
    { key: "pleats", name: "Pleats", editable: true },
    { key: "style", name: "Style", editable: true },
    { key: "notes", name: "Notes", editable: true }
]
  
const rows = []

class FormTable extends Component {
    constructor(props) {
        super(props)
        this.state = { rows, selectedIndexes: [] }
    }

    componentDidUpdate() {
        console.log('formTable loaded')
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
        console.log('added new row')
    }
    deleteRow = () => { 
        console.log(this.state.selectedIndexes)
        this.state.rows.splice(this.state.selectedIndexes, 1)
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
        const rowText = this.state.selectedIndexes.length === 1 ? "row" : "rows"
        return (
            <div>
                <div>
                    <Typography variant='display1'>
                        Curtains
                    </Typography>
                </div>
                <span>
                    {this.state.selectedIndexes.length} {rowText} selected
                </span>
                <div>
                <ReactDataGrid
                    rowKey='id'
                    columns={columns}
                    rowGetter={i => this.state.rows[i]}
                    rowsCount={this.state.rows.length}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={true}
                    rowSelection={{
                        showCheckbox: true,
                        enableShiftSelect: true,
                        onRowsSelected: this.onRowsSelected,
                        onRowsDeselected: this.onRowsDeselected,
                        selectBy: {
                          indexes: this.state.selectedIndexes
                        }
                    }}
                />
                <Button onClick={this.addNewRow} variant='contained' style={{float: 'right', margin: 20}}>Add</Button>
                <Button onClick={this.deleteRow} variant='outlined' color='secondary' style={{ margin: 20 }}>Back</Button>
                <Button onClick={()=> this.submit()} variant='outlined' color='primary' style={{ margin: 20 }}>Save all changes</Button>
                </div>
            </div>
        )
    }
}

export default FormTable