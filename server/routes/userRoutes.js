const router = require('express').Router();
const { signup, login, getAuthUser } = require('../controllers/user');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// @route     POST api/users/signup
// @desc      Register User
// @access    Public
router.post(
  '/signup',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password of minimum 6 characters'
    ).isLength({ min: 6 }),
  ],
  signup
);

// @route     POST api/users/login
// @desc      Login User
// @access    Public
router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists().notEmpty(),
  ],
  login
);

// @route     GET api/users/auth
// @desc      Get auth user
// @access    Private
router.get('/auth', auth, getAuthUser);

module.exports = router;
