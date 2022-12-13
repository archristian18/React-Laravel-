import * as React from 'react';

import useStyles from './style'
import { TextField, Typography, Button, Grid } from '@mui/material';

export const CreateCustomer = () => {

    const classes = useStyles()

  return (
    <Grid container className={classes.container} direction='column'>
      <Grid item xs={12} md={12}>
        <form noValidate autoComplete='off'>
          <Typography className={classes.Typography} variant="h5">Create Customer Account</Typography>
              <div className={classes.field}>
                <TextField
                  label="First Name"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                <TextField
                  label="Last Name"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                <TextField
                  label="Details"
                  fullWidth
                  required
                  />
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