import * as React from 'react';

import useStyles from './style'
import { TextField, Typography, Button, Grid } from '@mui/material';

export const AddAccount = () => {

    const classes = useStyles()

  return (
    <Grid container className={classes.container} direction='column'>
      <Grid item xs={12} md={12}>
        <form noValidate autoComplete='off'>
          <Typography className={classes.Typography} variant="h5">Add Account</Typography>
              <div className={classes.field}>
                <TextField
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  label="GCASH"
                  fullWidth
                  required
                  />
              </div>
              <div className={classes.field}>
                <TextField
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  label="LOAD WALLET"
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