import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventTable.module.scss';

const EventTable = ({match}) => (
  <div className={styles.component}>
    <h2>EventTable view</h2>
    <p>{match.params.id}</p>
  </div>
);

EventTable.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default EventTable;
