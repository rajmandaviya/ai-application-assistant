// Bring in express, express router, the registerUser, loginUser, and getMe functions from the userController, and the protect function from the authMiddleware.
const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// Routes: /api/users, /api/users/login, /api/users/me (protected).
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router
  .route('/:id')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// Export the router.
module.exports = router
