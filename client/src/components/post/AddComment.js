import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { TextField, Typography, Button } from '@material-ui/core';

const AddComment = ({ postId, addComment, isAuthenticated }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      {isAuthenticated && (
        <Fragment>
          <Typography variant='h6' gutterBottom>
            Leave A Comment
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(postId, { text });
              setText('');
            }}
          >
            <TextField
              name='text'
              variant='outlined'
              fullWidth
              multiline
              rows='5'
              placeholder='Comment on this post'
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></TextField>
            <Button
              type='submit'
              variant='outlined'
              color='primary'
              style={{ marginTop: 20 }}
            >
              Comment
            </Button>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addComment })(AddComment);
