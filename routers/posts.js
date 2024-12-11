const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')
const posts = require('../data/posts.js')

router.param('identifier', (req, res, next, identifier) => {
	console.log('param identifier:', identifier)

	const post = posts.find((post) => post.id === parseInt(identifier) || post.slug === identifier)

	if (post) {
		req.post = post
		next()
	} else {
		res.status(404)
		res.json({
			from: 'middleware param',
			error: 'Post not found',
			message: 'Il post non è stato trovato.',
		})
	}
})

// Index
router.get('/', postController.index)
router.get('/categories',postController.categoriesIndex)
// Show
router.get('/:identifier' , postController.show)
// Store
router.post('/' , postController.store)
// Update
router.put('/:identifier' , postController.update)
// Modify
router.patch('/:identifier' , postController.modify)
// Destroy
router.delete('/:identifier' , postController.destroy)

module.exports = router
