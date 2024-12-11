const posts = require('../data/posts.js')
const categories = require('../data/categories.js')
let lastIndex = posts.at(-1).id

// Index
function index(req, res) {
    console.log('Lista dei post')
    let filteredPosts = posts

    
    if (req.query.tag) {
        filteredPosts = posts.filter((post) => {
            return post.tags.includes(req.query.tag.toLowerCase())
        })
    }
    
    if (req.query.notPublished) {
        filteredPosts = filteredPosts.filter((post) =>{
            return post.published === false
        })
    } else {
        filteredPosts = filteredPosts.filter((post) =>{
            return post.published === true
        })
    }

    const limit = parseInt(req.query.limit)
	if (limit && !isNaN(limit) && limit >= 0) {
		filteredPosts = filteredPosts.slice(0, limit)
	}

    res.json(filteredPosts)
}

function categoriesIndex(req, res) {
    res.json(categories)
    console.log(categories);
    
}
// Show
function show(req, res) {
    res.json(req.post)
}
// Store
function store(req, res) {
    console.log('Creazione del post')
    const { title, content, image, tags, category, published = true } = req.body

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
        tags: [tags],
        category,
        published
    }

    posts.push(post)
    res.status(201).send(post)
}

// Update
function update(req, res) {

    const errors = validate(req)

    if (errors.length) {
        res.status(400)

        return res.json({
            error: 'Invalid request',
            messages: errors,
        })
    }

    const { title, image, content, tags } = req.body

    req.post.title = title
    req.post.slug = createSlug(title)
    req.post.content = content
    req.post.image = image
    req.post.tags = tags

    res.json(req.post)
}
// Modify
function modify(req, res) {
    const { title, image, content, tags } = req.body

    if (title) {
    req.post.title = title
    req.post.slug = createSlug(title)
    }
    if (content) req.post.content = content
    if (image) req.post.image = image
    if (tags) req.post.tags = tags

    res.json(req.post)
    }

    // Destroy
    function destroy(req, res) {
        const post = req.post
        const postsIndex = posts.findIndex((p) => p.id === post.id || p.slug === post.slug)
        posts.splice(postsIndex, 1)
        res.sendStatus(204)
    }

    module.exports = { index, show, store, update, modify, destroy, categoriesIndex }

    // Funzioni

    function validate(req) {
        const { title, content, image, tags, category, published = true } = req.body

        const errors = []

        if (!title) {
            errors.push('Title is required')
        }

        if (!category) {
            errors.push('Category is required')
        }

        if (!content) {
            errors.push('Content is required')
        }

        if (!tags) {
            errors.push('Tags is required')
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