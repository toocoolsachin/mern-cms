import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Typography, TextField, Button } from '@material-ui/core';
import { setAlert } from '../../actions/alert';

const Register = ({ register, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ name, email, password });
    if (isAuthenticated) {
      history.push('/');
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <Typography variant='h4' gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <TextField
          label='Name'
          placeholder='Enter Full Name'
          fullWidth
          margin='normal'
          variant='outlined'
          name='name'
          value={name}
          onChange={onChange}
        />
        <TextField
          label='Email'
          placeholder='Enter Email'
          fullWidth
          margin='normal'
          variant='outlined'
          name='email'
          value={email}
          onChange={onChange}
        />
        <TextField
          label='Password'
          placeholder='Enter Password'
          fullWidth
          margin='normal'
          variant='outlined'
          name='password'
          value={password}
          onChange={onChange}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
        >
          Sign Up
        </Button>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(withRouter(Register));
