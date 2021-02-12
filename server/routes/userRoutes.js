const router = require('express').Router();
const { signup, login } = require('../controllers/user');

// @route     POST api/users/signup
// @desc      Register User
// @access    Public
router.post('/signup', signup);

// @route     POST api/users/login
// @desc      Login User
// @access    Public
router.post('/login', login);

module.exports = router;
