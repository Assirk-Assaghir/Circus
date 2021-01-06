import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
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
    navigation: {},
    toggleDrawer: {},
    appTitle: {}
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="fixed" color='primary' className={classes.navigation}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Menu"
                    className={classes.toggleDrawer}
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography
                    variant="title"
                    color="inherit"
                    className={classes.appTitle}
                >
                    <Link to='/'>
                        <img src="https://media.discordapp.net/attachments/762737273590382623/796026186273914920/134987688_234910378039949_7851398929522376211_n1.png" width="60px" />
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
