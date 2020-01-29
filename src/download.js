const stream = require('stream')
const fs = require('fs')
const got = require('got')
const { promisify } = require('util')

const pipeline = promisify(stream.pipeline)

;(async () => {
    await pipeline(
        got.stream(
            'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md',
        ),
        fs.createWriteStream('assets/hacker-laws.md'),
    )
})()
