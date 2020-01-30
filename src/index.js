import laws from './data'
import cors from 'cors'

const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/laws', (req, res) => {
    let responseArray = []
    laws.forEach(element => {
        if (element.id < 10) {
            responseArray.push('0' + element.id + ' ' + element.title)
        } else {
            responseArray.push(element.id + ' ' + element.title)
        }
    })

    res.send(responseArray.join('\n'))
})

app.get('/law/:id', (req, res) => {
    let idOfLaw = Number(req.params.id)
    if (idOfLaw < 0 || idOfLaw >= laws.length) {
        res.send('There is no ' + idOfLaw + '. law!')
    } else {
        let resultLaw = laws.find(element => element.id == idOfLaw)
        let sendingResult =
            resultLaw.id + ' ' + resultLaw.title + '\n' + resultLaw.desc

        res.send(sendingResult)
    }
})

app.get('/*', (req, res) =>
    res.send(` For list of laws \t curl http://localhost:3000/laws\n For detail of law \t curl http://localhost:3000/law/:id
`),
)

app.listen(port, () => console.log(`listening on port ${port}!`))
