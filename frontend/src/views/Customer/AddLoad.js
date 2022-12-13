import * as React from 'react';

import useStyles from './style'
import { TextField, Typography, Button, Grid } from '@mui/material';
export const AddLoad = () => {

    const classes = useStyles()

  return (
    <Grid container className={classes.container} direction='column'>
      <Grid item xs={12} md={12}>
        <form noValidate autoComplete='off'>
          <Typography className={classes.Typography} variant="h5">Load Station</Typography>
              <div className={classes.field}>
                <TextField
                  label="Customer Name"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                <TextField
                  label="Amount"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                <TextField
                  label="Option"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                {/* <TextField
                  label="Payment Method"
                  fullWidth
                  required
                  /> */}
              </div>
              <div className={classes.formGroup}>
                <div className={classes.submit}>
                <Button variant="contained" >Submit</Button>
                </div>
                <div className={classes.cancel}>
                <Button variant="contained" color="secondary">Cancel</Button>
                </div>
              </div>
        </form>
      </Grid>
    </Grid>
  );
}