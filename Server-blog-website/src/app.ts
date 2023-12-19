import express, { Express } from 'express'
import config from 'config'
import ConnectToDb from './utils/connect'
import router from './router'

const server: Express = express()
server.use(express.json())
server.use('/', router())

const Port = config.get<number>('port')

server.listen(Port, async () => {
  console.log('Running on Port --> ' + Port)
  await ConnectToDb()
})
