import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = ({
  getPosts,
  post: { posts, loading },
  auth: { isAuthenticated },
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Typography
        variant='h2'
        gutterBottom
        style={{
          borderBottom: '1px solid #e4e4e4',
          width: 150,
          boxShadow: '0px 5px 0px #ccc',
          marginBottom: 40,
        }}
      >
        Posts
      </Typography>
      <div>
        {posts.length === 0 && !isAuthenticated ? (
          <h3>No Posts yet. Register or Login to create posts</h3>
        ) : (
          posts?.map((post) => <PostItem key={post._id} post={post} />)
        )}
        {posts.length === 0 && isAuthenticated && (
          <h3>
            No Posts yet. <Link to='/addpost'>Create one</Link>
          </h3>
        )}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(Posts);
