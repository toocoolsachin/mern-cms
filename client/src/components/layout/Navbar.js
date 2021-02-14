import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  brand: {
    fontSize: 50,
  },
  links: {
    fontSize: 20,
  },
}));

const Navbar = ({ logout, auth: { isAuthenticated, user, loading } }) => {
  const classes = useStyles();

  const authLinks = (
    <Typography className={classes.root}>
      <Link className={classes.links}>{user && user.name}</Link>
      <Link to='/addpost' className={classes.links}>
        Add Post
      </Link>
      <span className={classes.links}>
        <a onClick={logout} href='#!'>
          <span>Logout</span>
        </a>
      </span>
    </Typography>
  );

  const guestLinks = (
    <Typography className={classes.root}>
      <Link to='/register' className={classes.links}>
        Register
      </Link>
      <Link to='/login' className={classes.links}>
        Login
      </Link>
    </Typography>
  );

  return (
    <nav className={classes.navItems}>
      <h1 className={classes.brand}>
        <Link to='/'>CMS</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
