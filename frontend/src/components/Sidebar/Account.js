import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import SavingsIcon from '@mui/icons-material/Savings';
import ListItemComponent from '../ListButtonItem'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from 'react-router-dom';
import useStyles from './style'

import {
    ListItemButton,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';

function Account() {

    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    
    return (
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
              <AccountBalanceWalletIcon />
          </ListItemIcon>
            <ListItemText primary="Account"/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemComponent Icon={() => <SavingsIcon />} >
              <Link to="/Account/Add" className={classes.link}>
                <ListItemText primary="Add Account" />
              </Link>
            </ListItemComponent>
            <Divider />
            <ListItemComponent Icon={() => <ReceiptLongIcon />} >
              <Link to="/Account/View" className={classes.link}>
                <ListItemText primary="View Account" />
              </Link>
            </ListItemComponent>
          </List>
        </Collapse>
      </List>
    );
}

export default Account;
