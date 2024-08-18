const express = require('express')
const app = express()
const port = 3000

app.listen(port, (error) => {
    if (error) {
        console.error('Error starting server:', error)
        return 
    }
    console.log(`Server on port: ${port}`)
})