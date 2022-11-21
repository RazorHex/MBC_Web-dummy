const express = require('express')
const path = require('path')
const fs = require('fs')
const s = require('./js/program')
const app = express()
const port = 9000

app.use(express.static(path.join(__dirname, '/')))
app.use(express.urlencoded({
  extended: true
}))

const files = fs.readdirSync(path.join(__dirname, 'HTML'))

// using method get to all the html files
for(f in files) {
  const file = files[f]
  if(!file.endsWith('.html')) {
    continue
  }

  if(file == 'home.html') {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, `HTML/${file}`))
    })
  } else {
    app.get(`/${file.split('.')[0]}`, (req, res) => {
      res.sendFile(path.join(__dirname, `HTML/${file}`))
    })
  }
}

app.post('/search', (req, res) => {
  res.redirect('/')
  s.search(req.body.search)
})

app.listen(port, () => console.log('Listening on port 9000'))