import React from 'react';
import styles from './Kitchen.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';


const demoContent = [
  {orderId: '123', table: '1', details: 'Pizza x1, Sauce: Tomato, Topings: cucumber, becon,olives'},
  {orderId: '124', table: '4', details: 'Breakfast x2, Coffee type: latte x1, espresso x1'},
  {orderId: '125', table: '6', details: 'Cake x1, Coffee type: espresso x1'},
  {orderId: '126', table: '3', details: 'Pizza x1, Sauce: soure cream, Topings: cucumber, pineaple, mushrooms'},
  {orderId: '127', table: undefined, details: 'Pizza x2, Sauce: Tomato, Topings: olives, bell pepper, mushrooms'},
  {orderId: '128', table: undefined, details: 'Salad x1, Ingridients: cucumber, tomatoes, olives, feta cheese, fresh herbs'},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Order Details</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.orderId}
            </TableCell>
            <TableCell>
              {row.table === undefined ? row.orderId : row.table}
            </TableCell>
            <TableCell>
              {row.details}
            </TableCell>
            <TableCell>
              <Fab size="small"  variant='extended' color='secondary' aria-label='add'>
                Done
              </Fab>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
