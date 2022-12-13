import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'
import PersonIcon from '@mui/icons-material/Person';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InventoryIcon from '@mui/icons-material/Inventory';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export const Navbar = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.AppBar}>
            <Toolbar className={classes.ToolBar}>
                <div className={classes.textNavBar}>
                    <InventoryIcon />
                    <Typography className={classes.Typography}>E-Load Inventory</Typography>
                </div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <PersonIcon  {...bindTrigger(popupState)}/>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Settings</MenuItem>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                    </React.Fragment>
                )}
                </PopupState>
            </Toolbar>
        </AppBar>
    );
}
