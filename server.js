const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Success!')
})

app.listen(3000)
