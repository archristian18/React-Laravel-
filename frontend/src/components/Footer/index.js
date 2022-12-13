import * as React from 'react';
import useStyles from './style'
import { Typography, Grid } from '@mui/material';

export const Footer = () => {

    const classes = useStyles()

  return (
    <Grid container className={classes.container}>
        <Grid item xs={12} md={12}>
            <Typography>E-Load 2022</Typography>
        </Grid>
    </Grid>
  );
}