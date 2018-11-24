import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import FormTable from './FormTable'

import { getColours, getMaterials, getSuburbs, getData, postData } from '../services/Product'

class Form extends Component {
    state = {
        customerName: '',
        suburb: '',
        material: '',
        colour: '',
        labelWidth: 0
    }
    // initial the dorpdown 
    componentDidMount() {
        // suburbs dropdown
        getSuburbs().then(data => this.setState({ suburbOptions: data }))
        // materials dropdown
        getMaterials().then(data => this.setState({materialOptions: data }))
        // colours dropdown
        getColours().then(data => this.setState({ colourOptions: data }))
        
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        })
        console.log("form loaded")
    }

    updateCustomerName(name) {
        this.setState({customerName: name.target.value})
        // console.log(name.target.value)
    }
    updateSuburb(suburb) {
        this.setState({suburb: suburb.target.value})
        // console.log(suburb.target.value)
    }
    updateMaterial(material) {
        this.setState({material: material.target.value})
        // console.log(material.target)
    }
    updateColour(colour) {
        this.setState({colour: colour.target.value})
        // console.log(colour.target.value)
    }
    getData() {
        return this.state
    }

    render() {
        const { colourOptions, materialOptions, suburbOptions } = this.state
        return (
            <form style={styles.form}  onSubmit={() => this.submit} autoComplete="off">
            <TextField
                id="outlined-uncontrolled"
                label="Customer"
                placeholder="Enter Your Name"
                margin="normal"
                variant="outlined"
                style={styles.selector}
                value={this.state.customerName}
                onChange={ name => this.updateCustomerName(name)}
            />
            <FormControl variant="outlined" style={styles.dropDown}>
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref
                    }}
                    // htmlFor="outlined-age-simple"
                    >
                        Suburb
                </InputLabel>
                    <Select
                        value={this.state.suburb}
                        onChange={ suburb => this.updateSuburb(suburb)}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name="suburb"
                                id="outlined-suburb-simple"
                            />
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                           suburbOptions ?
                                suburbOptions.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                ))
                                : null
                        }
                    </Select>
                </FormControl>
                <FormControl variant="outlined" style={styles.dropDown}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref
                        }}
                    // htmlFor="outlined-age-simple"
                    >
                        Material
                </InputLabel>
                    <Select
                        value={this.state.material}
                        onChange={ material => this.updateMaterial(material)}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name="material"
                                id="outlined-material-simple"
                            />
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                           materialOptions ?
                                materialOptions.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                ))
                                : null
                        }
                    </Select>
                </FormControl>
                <FormControl variant="outlined" style={styles.dropDown}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref
                        }}
                    // htmlFor="outlined-age-simple"
                    >
                        Colour
                </InputLabel>
                    <Select
                        value={this.state.colour}
                        onChange={ colour => this.updateColour(colour)}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name="colour"
                                id="outlined-colour-simple"
                            />
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                           colourOptions ?
                                colourOptions.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                ))
                                : null
                        }
                    </Select>
                </FormControl>
                <FormTable getData={this.getData()} />
            </form>
        )
    }
}

const styles = {
    form: {

    },
    selector: {
        margin: 20,
    },
    dropDown: {
        marginTop: 16,
        margin: 20,
        width: 195,
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form)