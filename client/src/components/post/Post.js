import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import AddComment from '../post/AddComment';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/post';
import { Button, Typography } from '@material-ui/core';

const Post = ({ getPost, post: { post, loading }, match, isAuthenticated }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/'>
        <Button style={{ marginBottom: 20 }} variant='outlined'>
          Back to Posts
        </Button>
      </Link>
      <PostItem post={post} />
      <AddComment postId={post._id} />
      {!isAuthenticated && (
        <Typography variant='h6' gutterBottom>
          <Link to='/login'>Login</Link> to comment on posts
        </Typography>
      )}
      <div>
        {post.comments.length > 0 && (
          <Typography variant='h6' gutterBottom style={{ marginTop: 20 }}>
            Comments
          </Typography>
        )}
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getPost })(Post);
