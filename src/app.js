const express = require('express')
const todoRouter = require('./todo/todo.router').router

const app = express()

app.use(express.json())

app.use('/api/v1', todoRouter)

app.listen(9000, ()=>{
    console.log('Server started at server 9000')
})