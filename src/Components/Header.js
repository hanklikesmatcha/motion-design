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
                    Jack Black
                    <Avatar>JB</Avatar>
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
    userName: {
        // textAlign: 'right'
    },
    subTitle: {
       
    }
}

export default Header