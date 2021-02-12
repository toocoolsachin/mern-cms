const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  addPost,
  getPosts,
  getPost,
  addComment,
} = require('../controllers/post');

// @route     POST api/posts
// @desc      Create a post
// @access    Private
router.post('/', auth, addPost);

// @route     GET api/posts
// @desc      Get all posts
// @access    Public
router.get('/', getPosts);

// @route     GET api/posts/:id
// @desc      Get post by Id
// @access    Public
router.get('/:id', getPost);

// @route     POST api/posts/comment/:id
// @desc      Comment on a post
// @access    Private
router.post('/comment/:id', auth, addComment);

module.exports = router;
