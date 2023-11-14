const http = require('http')
const queryString = require('querystring')
const express = require('express')
const port = process.env.PORT || 1234

const app = express()

app.get('/', respondIndex)
app.get('/JSON', respondJson)
app.get('/echo', echo)


function respondJson(req, res) {
    res.json({ text: 'hi', numbers: [1, 2, 3] })
}

function respondIndex(req, res) {
    res.send('You are in the index page, hello')
}
function pageNotFound(req, res) {
    res.send('Page not found')
}
function echo(req, res) {
    const { input = '' } = req.query
    res.json
        ({
            normal: input,
            shouty: input.toUpperCase(),
            characterCount: input.length,
            backwards: input
                .split('')
                .reverse()
                .join('')
        })

}

app.listen(port, () => console.log(`Server started on port ${port}`))