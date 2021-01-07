import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
        position: "absolute",
        right: 0
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    buttonBar: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        margin: "10px",
        paddingLeft: "8px",
        paddingRight: "35px",

        right: 0,
        position: "relative",
        width: "100%",
        background: "transparent"
    }
});

const AppBarCollapse = props => {


    const NavItems =
        [

            { title: "Gallery", path: "/gallery" },
            { title: "Programs", path: "/Programs" },
            { title: "About Us", path: "/AboutUs" },
            { title: "Contact Us", path: "/ContactUs" },
        ]
    return (
        <div className={props.classes.root}>
            <ButtonAppBarCollapse>
                {NavItems.map((item, i) => (
                    <Link to={item.path} key={item.title} className={props.classes.link}>
                        <MenuItem>
                            {item.title}
                        </MenuItem>
                    </Link>
                ))}
            </ButtonAppBarCollapse>
            <div className={props.classes.buttonBar} id="appbar-collapse">
                {
                    NavItems.map((item, i) => (
                        <Link to={item.path} key={item.title} className={props.classes.link}>
                            <Button color="inherit">
                                {item.title}
                            </Button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default withStyles(styles)(AppBarCollapse);
