import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    buttonCollapse: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
        margin: "10px",
        boxShadow: "none"
    },
    link: {
        textDecoration: 'none',
        color: '#aa1d23',
    },
});

class ButtonAppBarCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
        this.handleMenu = this.handleMenu.bind(this);
    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { classes, NavItems } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.buttonCollapse}>
                <IconButton onClick={this.handleMenu}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {NavItems.map((item, i) => (
                        <Link to={item.path} key={item.title} className={classes.link}>
                            <MenuItem onClick={this.handleClose} >
                                {item.title}
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </div>
        );
    }
}
export default withStyles(styles)(ButtonAppBarCollapse);
