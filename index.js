const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('I love you Nerdy!')
})

app.listen(PORT, () => {
    console.log('Server listening on port 3000')
})
