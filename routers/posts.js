const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')

// Index
router.get('/' , postController)
// Show
router.get('/:id' , postController)
// Create
router.post('/' , postController)
// Update
router.put('/:id' , postController)
// Modify
router.patch('/:id' , postController)
// Delete
router.delete('/:id' , postController)

module.exports = router
