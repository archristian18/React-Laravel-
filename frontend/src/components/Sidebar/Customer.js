import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import GroupsIcon from '@mui/icons-material/Groups';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListItemButtonComponent from '../ListButtonItem'
import { Link } from 'react-router-dom';
import useStyles from './style'

import {
	ListItemButton,
	List,
	ListItemText,
	ListItemIcon,
} from '@mui/material';

function Customer() {

	const classes = useStyles()
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

    return (
			<List>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText primary="Customer" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButtonComponent Icon={() => <PhonelinkRingIcon />} >
							<Link to="/Customer/Load/Add" className={classes.link}>
								<ListItemText primary="Load"/>
							</Link>
						</ListItemButtonComponent>
						<ListItemButtonComponent Icon={() => <PersonAddIcon />} >
							<Link to="/Customer/Create" className={classes.link}>
								<ListItemText primary="Create Customer" />
							</Link>
						</ListItemButtonComponent>
						<ListItemButtonComponent Icon={() => <ListAltIcon />} >
							<Link to="/Customer/View" className={classes.link}>
								<ListItemText primary="View Customer" />
							</Link>
						</ListItemButtonComponent>
					</List>
				</Collapse>
			</List>
    );
}

export default Customer;
