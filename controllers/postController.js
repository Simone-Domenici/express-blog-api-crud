const posts = require('../data/posts.js')

// Index
function index(req,res) {
    console.log('Lista dei post')
    let filteredPosts = posts

	if (req.query.tag) {
		filteredPosts = posts.filter((post) => {
            const formattedTags = post.tags.toLowerCase()
			return formattedTags.includes(req.query.tag.toLowerCase())
		})
    }  
    res.json(filteredPosts)
}
// Show
function show(req,res) {
    const identifier = req.params.identifier;
    console.log(`Mostro il post con id: ${identifier}`)

    const findPost = (idOrSlug) => {
        if (!isNaN(idOrSlug)) {
            // Cerca per ID
            return posts.find(post => post.id === parseInt(idOrSlug));
        } else {
            // Cerca per slug
            return posts.find(post => post.slug === idOrSlug.toLowerCase());
        }
    };
    const post = findPost(identifier);
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
    const slug = req.params.slug
    res.send(`Aggiornamento del post ${id}`)
}
// Modify
function modify(req,res) {
    res.send(`Modifica del post ${id}`)
}
// Destroy
function destroy(req,res) {
	const identifier = req.params.identifier;
    console.log(`Elimino il post con id: ${identifier}`)

    const findPost = (idOrSlug) => {
        if (!isNaN(idOrSlug)) {
            // Cerca per ID
            return posts.find(post => post.id === parseInt(idOrSlug));
        } else {
            // Cerca per slug
            return posts.find(post => post.slug === idOrSlug.toLowerCase());
        }
        };
    const post = findPost(identifier);
    const postsIndex = posts.indexOf(post)

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
