const express = require('express')
const fetch = require("node-fetch");

const app = express()
const port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`listening on port${port}`))

app.get('/express_backend', (req, res)=>{
    
    res.send({express: 'your back end is talking to react app'})
})