import express from 'express';
import logger from './src/middlewares/logger.js'
import { authenController, todoController } from './src/controller/'
import cors from 'cors'
import bodyParser from 'body-parser'

const application = express()
const port = 8081;

application.use(cors())
application.use(logger)
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use('/authen', authenController)
application.use('/todo', todoController)
application.listen(port)