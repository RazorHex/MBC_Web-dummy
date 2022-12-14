const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use(express.static(path.join(__dirname, '/')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'HTML/home.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML/about.html'))
})

app.listen(port, () => console.log('Listening on port 9000'))