const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts.js')
const notFound = require('./middlewares/notFound.js')
const errorsHandler = require('./middlewares/errorsHandler.js')
const cors = require('cors')

app.use(cors())
app.use(express.static('public'));
app.use(express.json())
app.use('/posts' , postsRouter)


app.use(errorsHandler)
app.use(notFound)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
