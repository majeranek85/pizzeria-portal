import React from 'react';
import styles from './Dashboard.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const demoContent ={
  bookings: [
    {id: '1', name: 'Anna Lewa', phone: '666 555 222', hours: '14:00 - 18:00', table: '2'},
    {id: '2', name: 'Dominika Trykała', phone: '888 888 888', hours: '12:30 - 14:00', table: '1'},
    {id: '3', name: 'Gamma', phone: '336 551 987', hours: '16:30 - 20:00', table: '1'},
    {id: '4', name: 'Wieczór z Pankracym', phone: '569 214 885', hours: '17:00 - 21:00', table: '2'},
    {id: '5', name: 'Lulek i przyjaciele', phone: '111 111 111', hours: '20:00 - 24:00', table: '3'},
    {id: '6', name: 'Felek Kartofelek', phone: '632 355 556', hours: '12:30 - 13:00', table: '5'},
  ],

  statistics: [
    {id: 'Local', value: 32},
    {id: 'Remote', value: 50},
  ],
};

const Dashboard = () => (
  <div className={styles.component}>
    <Paper className={styles.section}>
      <h3>Order Statistics</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order type</TableCell>
            <TableCell>Number of orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.statistics.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.section}>
      <h3>Table bookings for today</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.bookings.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.hours}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
