import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

function ListButtonItem({ Icon, children }) {

    return (
		<ListItemButton sx={{ pl: 4 }}>
			<ListItemIcon>
				<Icon />
			</ListItemIcon>
			{children}
		</ListItemButton>
    );
}

ListButtonItem.propTypes = {
	Icon: PropTypes.func.isRequired,
	children: PropTypes.node,
  }

export default ListButtonItem;
