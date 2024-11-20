const posts = require('../data/posts.js')

// Index
function index(req,res) {
    console.log('Lista dei post')
    let filteredPosts = posts

	if (req.query.tag) {
		filteredPosts = posts.filter((post) => {
			return post.tags.includes(req.query.tag.toLowerCase())
		})
}
// Show
function show(req,res) {
    const id = parseInt(req.params.id)
	console.log(`Ecco il post con id: ${id}`)

	const post = posts.find((post) => post.id === id)
	let result = post

	if (!post) {
		console.log('Post non trovato')

		res.status(404)
		result = {
			error: 'Post not found',
			message: 'Il post non è stato trovato.',
		}
	}

	res.json(result)
}
// Store
function store(req,res) {
    res.send('Creazione del post')
}
// Update
function update(req,res) {
    const id = req.params.id
    res.send(`Aggiornamento del post ${id}`)
}
// Modify
function modify(req,res) {
    const id = req.params.id
    res.send(`Modifica del post ${id}`)
}
// Destroy
function destroy(req,res) {
    const id = parseInt(req.params.id)
	console.log(`Elimino il post con id: ${id}`)

	const postsIndex = posts.findIndex((post) => post.id === id)

	if (postsIndex === -1) {
		res.status(404)

		return res.json({
			error: 'Post not found',
			message: 'Il post non è stato trovato.',
		})
	}
	posts.splice(postsIndex, 1)
	res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }
