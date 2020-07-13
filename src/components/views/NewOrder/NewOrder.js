import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

class NewOrder extends React.Component {
  static propTypes = {
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tableNumber: PropTypes.any,
    updateTableStatus: PropTypes.func,
  }

  handleClick(newOrderNumber) {
    const {tableNumber, updateTableStatus} = this.props;
    //console.log(tableNumber);

    updateTableStatus({
      id: tableNumber,
      status: 'ordered',
      order: newOrderNumber,
    });
  }


  render() {
    return (
      <div className={styles.component}>
        <Container maxWidth='lg'>
          <form className={styles.form} noValidate autoComplete='off'>
            <TextField
              className={styles.input}
              id="order-input"
              label="order number"
              type="number"
              value="555"
              variant="outlined"
              color="secondary"
            />
            <Button
              className={styles.button}
              size='large'
              variant="contained"
              color="secondary"
              component={Link}
              onClick={() => this.handleClick(555)}
              to={`${process.env.PUBLIC_URL}/waiter`}
            >
                Add order
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default NewOrder;
