const express = require('express')
const app = express()

app.get('/gadgets', (request, resonse) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
