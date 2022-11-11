const express = require('express')
const path = require('path')
const app = express()

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'hello_world.html'))
})
app.listen(9000)

console.log('Online')