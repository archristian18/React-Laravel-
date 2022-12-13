import React from 'react';
import useStyles from './style'
import Customer from './Customer';
import Account from './Account';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';

import {
	ListItem,
	List,
	ListItemIcon,
	ListItemText,
	Divider,
	ListItemButton
} from '@mui/material';

export const Sidebar = () => {

    const classes = useStyles()

    return (
		<div>
			<List component="div">
				<ListItem disablePadding>
					<ListItemButton className={classes.Sidebar}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<Link to="/home" className={classes.link}>
							<ListItemText primary="Home"/>
						</Link>
					</ListItemButton>
				</ListItem>
				<Divider />
			</List>
			<Account />
			<Divider />
			<Customer />
		</div>
    );
};
