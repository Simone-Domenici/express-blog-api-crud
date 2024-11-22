const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts.js')
const notFound = require('./middlewares/notFound.js')

app.use(express.static('public'));
app.use(express.json())
app.use('/posts' , postsRouter)


app.use(notFound)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
