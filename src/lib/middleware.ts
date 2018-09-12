import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { Express, Request, Response } from 'express'
import * as morgan from 'morgan'

export default (app: Express) => {

    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(cors())

    app.use(morgan('dev'))

}
