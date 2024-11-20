const express = require('express')
const router = express.Router()
const posts = require('../posts.js')

// Index
router.get('/' ,(req,res) => {
    console.log('Lista dei post')
    res.json(posts)
})
// Show
router.get('/:slug' , (req,res) => {
    const slug = req.params.slug
	console.log(`Post con lo slug:${slug}`)

	const post = posts.find((p) => p.slug === slug)

	res.json(post)
})
// Create
router.post('/' , (req,res) => {
    res.send('Creazione del post')
})
// Update
router.put('/:slug' , (req,res) => {
    const slug = req.params.slug
    res.send(`Aggiornamento del post ${slug}`)
})
// Modify
router.patch('/:slug' , (req,res) => {
    res.send(`Modifica del post ${slug}`)
})
// Delete
router.delete('/:slug' , (req,res) => {
    res.send(`Cancellazione del post ${slug}`)
})

module.exports = router
