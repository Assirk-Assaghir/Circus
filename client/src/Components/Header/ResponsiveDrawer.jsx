import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBarCollapse from "./AppBarCollapse";
import { Link } from 'react-router-dom'

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    logo: {
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center'
    },
    logoText: {
        color: '#aa1d23',
        fontFamily: 'Gabriola',
        margin: '1rem'
    },
    navigation: {},
    toggleDrawer: {},
    appTitle: {}
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="fixed" color='primary' className={classes.navigation}>
            <Toolbar>
                {/* <IconButton
                    color="inherit"
                    aria-label="Menu"
                    className={classes.toggleDrawer}
                >
                    <MenuIcon />
                </IconButton> */}
                <Typography
                    variant="inherit"
                    color="inherit"
                    className={classes.appTitle}
                >
                    <Link to='/' className={classes.logo}>
                        <img alt="logo" src="https://media.discordapp.net/attachments/762737273590382623/798269889063550976/1.png" width="75px" />
                        <h1 className={classes.logoText}>Assirk Assaghir</h1>
                    </Link>
                </Typography>
                <AppBarCollapse />
            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
