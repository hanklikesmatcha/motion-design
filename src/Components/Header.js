import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'


class Header extends Component {
    render() {
        return (
            <Grid>
                <Typography variant='display3' style={styles.header}>
                    LOGO
                </Typography> 
                <Typography variant='display1' style={styles.userName}>
                    <Avatar style={styles.avatar}r>JB</Avatar>
                    <text>Jack Black</text>
                </Typography>
                <Typography variant='display2' style={styles.subTitle}>
                    Product View
                </Typography>
            </Grid>
        )
    }
}
const styles = {
    header: {
    },
    avatar: {
        float: "left"
    },
    userName: {
        // textAlign: 'right'
    },
    subTitle: {
       
    }
}

export default Header