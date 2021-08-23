const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")))  // safer to use absolute path as we may run the server from a different location

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res) => {
    // res.send('Hello World!')
    res.json({string : "this is a json object"})
})

/* passing parameters to url */
app.get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})