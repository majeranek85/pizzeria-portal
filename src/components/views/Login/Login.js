import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <Container maxWidth='lg'>
      <form className={styles.form} noValidate autoComplete='off'>
        <TextField
          className={styles.input}
          id="login-input"
          label="Login"
          variant="outlined"
          color="secondary"
        />
        <TextField
          className={styles.input}
          id="password-input"
          label="Password"
          type="password"
          variant="outlined"
          color="secondary"
        />
        <Button
          className={styles.button}
          size='large'
          variant="contained"
          color="secondary"
          component={NavLink}
          exact to={`${process.env.PUBLIC_URL}/`}>
          Login
        </Button>
      </form>
    </Container>
  </div>
);

export default Login;
