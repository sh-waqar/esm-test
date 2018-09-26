const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

app.get('/http', (req, res) => {
  return res.send(req.query)
})

app.use('/', express.static('dist'))

app.listen(9000, () => console.log('Example app listening on port 9000!'))
