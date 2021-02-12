const router = require('express').Router();
const { signup, login, getAuthUser } = require('../controllers/user');
const auth = require('../middlewares/auth');

// @route     POST api/users/signup
// @desc      Register User
// @access    Public
router.post('/signup', signup);

// @route     POST api/users/login
// @desc      Login User
// @access    Public
router.post('/login', login);

// @route     GET api/users/auth
// @desc      Get auth user
// @access    Private
router.get('/auth', auth, getAuthUser);

module.exports = router;
