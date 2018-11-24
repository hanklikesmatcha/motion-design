import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
        return (
            <div>
                <List>
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
                </List>
            </div>
        )
    }
}

export default Orders