import React from 'react';
import { Sidebar } from '../Sidebar';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useStyles from './style'
import GroupsIcon from '@mui/icons-material/Groups';
import ListItemComponent from '../ListButtonItem'
import InboxIcon from '@mui/icons-material/Inbox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {
	List,
  Divider,
} from '@mui/material';

function Home() {
  
  const classes = useStyles()

    return (
      <div>
        <Navbar />
        <Grid container className={classes.item}>
            <Grid item className={classes.listIcon} sx={{display:{md:"none", l:"block"}}}>
            <List >
              <ListItemComponent Icon={() => <InboxIcon />} />
              <Divider />
              <ListItemComponent Icon={() => <AccountBalanceWalletIcon />} />
              <Divider />
              <ListItemComponent Icon={() => <GroupsIcon />} />
              <Divider />
            </List>
            </Grid>
            <Grid item
            sx={{ display: {xs:"none", sm:"none", md:"block"}}}
            md={3} l={2}
            >
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9} l={10} className={classes.body}>
            <Outlet  />
          </Grid>
          <Footer />
        </Grid>
      </div>
    );
}

export default Home;
