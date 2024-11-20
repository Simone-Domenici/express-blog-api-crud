const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')

// Index
router.get('/', postController.index)
// Show
router.get('/:identifier' , postController.show)
// Store
router.post('/' , postController.store)
// Update
router.put('/:id' , postController.update)
// Modify
router.patch('/:id' , postController.modify)
// Destroy
router.delete('/:identifier' , postController.destroy)

module.exports = router
