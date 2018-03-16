import 'babel-polyfill'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import addPin from './service/addPin'
import getPins from './service/getPins'

dotenv.load()

const { NODE_PORT, DB_HOST, DB_PORT, DB_NAME } = process.env

const server = express()
server.use(
  bodyParser(),
  cors(),
)

server.get('/', (req, res) => {
  res.send();
})

server.get('/get-pins', async (req, res) => {
  const pins = await getPins()
  res.json(pins)
})

server.post('/add-pin', (req, res) => {
  const { namePlace, createdBy, lng, lat } = req.body
  addPin(namePlace, createdBy, lng, lat)
  res.send('success na ja');
})

// config server and MongoDB

const urlMongoDB = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
mongoose.promise = global.Promise
mongoose.connect(urlMongoDB)
  .then(() => {
    console.log(`DB connectd on ${urlMongoDB}`)
  })
  .catch((err) => {
    console.log(err)
  })

server.listen(NODE_PORT, (error) => {
  if (error) throw error
  console.log(`server run on port : ${NODE_PORT}`)
})