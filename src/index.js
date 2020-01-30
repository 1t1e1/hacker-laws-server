import data from './data'
import cors from 'cors'

const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => res.send('Write help page'))
app.get('/laws', (req, res) => res.send('List of laws'))
app.get('/law/:id', (req, res) => res.send(`desc of law ${req.params.id}`))

app.listen(port, () =>
    console.log(`for help curl get req. to http://localhost:3000/ ${port}!`),
)
