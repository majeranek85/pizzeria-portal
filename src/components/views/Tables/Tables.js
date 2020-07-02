import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123xyz`}>Booking details 123xyz</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`}>Event details 123abc</Link>


  </div>
);

export default Tables;
