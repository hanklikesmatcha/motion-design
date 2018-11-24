import React, { Component } from 'react'
import { getData } from '../services/Product'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// import { getData } from '../services/Product'

class Orders extends Component {
    componentDidMount() {
        getData().then(data => console.log(data))// TODO
        console.log('orders loaded')
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Orders" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Orders