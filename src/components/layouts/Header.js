import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
class Header extends Component {
    // Initialized State
    constructor(props) {
        super(props);

        this.state = {
            //property

        };
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        RMUI header
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }


}

export default Header;