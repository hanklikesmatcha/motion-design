import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'


class Header extends Component {
    render() {
        return (
            <Grid>
                <div>
                    <Typography variant='display3' style={styles.header}>LOGO</Typography>
                    <Typography variant='display1' style={styles.userName}>
                        <Avatar style={styles.avatar}r>JB</Avatar>
                            Jack Black
                    </Typography>
                </div> 
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
        float: 'left',
        marginRight: 20
    },
    userName: {
        float: 'right',
        paddingTop: 20
    },
    subTitle: {
    }
}

export default Header