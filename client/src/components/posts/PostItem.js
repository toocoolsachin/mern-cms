import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 1100,
    marginBottom: 20,
    padding: 10,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const PostItem = ({
  post: { _id, title, content, name, email, user, comments, createdAt },
}) => {
  const classes = useStyles();
  return (
    <Link to={`/post/${_id}`}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h4' gutterBottom>
            {title}
          </Typography>
          <Typography variant='body1' component='p'>
            {content}
          </Typography>
        </CardContent>
        <CardActions className={classes.footer}>
          <Typography variant='body2'>
            Posted on <Moment format='DD-MM-YYYY HH:mm:ss'>{createdAt}</Moment>
          </Typography>
          <div>
            <Typography variant='body1' gutterBottom>
              Posted by
            </Typography>
            <Typography variant='body2'>{name}</Typography>
            <Typography variant='body2'>{email}</Typography>
          </div>
        </CardActions>
      </Card>
    </Link>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PostItem);
