import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({match}) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    <p>{match.params.id}</p>
  </div>
);

Order.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default Order;
