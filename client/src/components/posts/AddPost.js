import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AddPost = ({ addPost, history, post: { posts } }) => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const { title, content } = postData;

  const onChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addPost({ title, content });
    history.push('/');
  };

  return (
    <Fragment>
      <Link to='/'>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          style={{ marginBottom: 20 }}
        >
          Back to Posts
        </Button>
      </Link>
      <Typography variant='h4' gutterBottom>
        Create a new post
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label='Title'
          placeholder='Post Title'
          fullWidth
          margin='normal'
          variant='outlined'
          required
          name='title'
          value={title}
          InputLabelProps={{ shrink: true }}
          onChange={onChange}
        />
        <TextField
          name='content'
          label='Content'
          multiline
          fullWidth
          rows='10'
          required
          InputLabelProps={{ shrink: true }}
          placeholder='Post Content'
          value={content}
          onChange={onChange}
          variant='outlined'
          margin='normal'
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
        >
          Add Post
        </Button>
      </form>
    </Fragment>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { addPost })(AddPost);
