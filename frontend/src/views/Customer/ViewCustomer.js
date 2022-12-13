import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { accountDetails } from '../../services/accountDetails'
import useStyles from './style'



export const ViewCustomer = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    
    const details = useSelector((state) => state.account.details)

  useEffect(() => {
    dispatch(accountDetails())
  }, )

  return (
    <TableContainer component={Paper}  className={classes.form}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell align="left">Details</TableCell>
            <TableCell align="left">Debt</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell align="left">{row.gcash}</TableCell> */}
              <TableCell align="left">{row.loads}</TableCell>
              <TableCell align="left">{row.gcash}</TableCell>
              <TableCell align="left">{row.loads}</TableCell>
              <TableCell align="left">
                  <Button variant="outlined">Views</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}