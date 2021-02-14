import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 20,
    marginTop: 20,
  },
});

const CommentItem = ({ comment: { text, name, date }, auth }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper variant='outlined' elevation={3} className={classes.root}>
        <Typography variant='h6' gutterBottom>
          {text}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {name}
        </Typography>
        <Typography variant='body2' guutterBottom>
          Posted on <Moment format='DD/MM/YYYY HH:mm:ss'>{date}</Moment>
        </Typography>
      </Paper>
    </Fragment>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(CommentItem);
