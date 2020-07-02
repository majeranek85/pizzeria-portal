import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTable.module.scss';

const BookedTable = ({match}) => (
  <div className={styles.component}>
    <h2>BookedTable view</h2>
    <p>{match.params.id}</p>
  </div>
);

BookedTable.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default BookedTable;
