const posts = require('../data/posts.js')
let lastIndex = posts.at(-1).id

// Index
function index(req,res) {
    console.log('Lista dei post')
    let filteredPosts = posts

	if (req.query.tag) {
		filteredPosts = posts.filter((post) => {
			return post.tags.includes(req.query.tag.toLowerCase())
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
    console.log('Creazione del post')
    console.log(req.body)
    const { title, content, image, tags } = req.body

	const errors = validate(req)

	if (errors.length) {

		res.status(400)

		return res.json({
			error: 'Invalid request',
			messages: errors,
		})
	}

	lastIndex++
    const slug = createSlug(title)

	const post = {
		id: lastIndex,
		title,
        slug, 
		content,
		image,
        tags: [tags]
	}

	posts.push(post)
	res.status(201).send(post)
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

// Funzioni

function validate(req) {
	const { title, content, image, tags } = req.body

	const errors = []

	if (!title) {
		errors.push('Name is required')
	}

	if (!image) {
		errors.push('Image is required')
	}

	if (!content) {
		errors.push('Ingredients is required')
	}

    if (!tags) {
		errors.push('Tag is required')
	}

	return errors
}


function createSlug(title) {
    // Rimuovi caratteri speciali e accent
    const slug = title.toLowerCase()
                        .replace(/[^\w\s-]/g, '') // Rimuovo caratteri non alfanumerici, spazi e trattini
                        .replace(/\s+/g, '-') // Sostituisco spazi multipli con un singolo trattino
                        .replace(/-+/g, '-'); // Rimuovo trattini multipli

    return slug;
}