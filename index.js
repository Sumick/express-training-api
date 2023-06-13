const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('I love you Nerdy! Do it, reject my code!')
})

app.listen(PORT, () => {
    console.log('Server listening on port 3000')
})
