const got = require('got')
;(async () => {
    try {
        const response = await got(
            'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md',
        )
        console.log(response.body)
        console.log(typeof response.body)
        console.log(response.body.length)
    } catch (error) {
        console.log(error.response.body)
    }
})()
