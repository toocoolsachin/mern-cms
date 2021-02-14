const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  addPost,
  getPosts,
  getPost,
  addComment,
} = require('../controllers/post');
const { check } = require('express-validator');

// @route     POST api/posts
// @desc      Create a post
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('content', 'Content is required').not().isEmpty(),
    ],
  ],
  addPost
);

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
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  addComment
);

module.exports = router;
