import React from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemButton
} from '@mui/material';

function ListItemTemplate({ Icon }) {

    return (
        <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
}
  ListItemTemplate.propTypes = {
      Icon: PropTypes.func.isRequired,
    }

export default ListItemTemplate;
