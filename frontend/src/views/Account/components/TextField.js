import React from 'react';
import PropTypes from 'prop-types';

import {
    ListItemText,

} from '@mui/material';

function ListItems({ name }) {

    return (
        <ListItemText primary={name} />
    );
}

ListItems.propTypes = {
	name: PropTypes.string,
  }

export default ListItems;
