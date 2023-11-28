const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  getAllUsers,
} = require('../controllers/user-controller');

router.post('/signup', signup);
router.post('/login', login);
router.get('/getusers', getAllUsers);

module.exports = router;
