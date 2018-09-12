import * as express from 'express'
import { NextFunction, Request, Response } from 'express'
import config from './config'
import exception from './lib/exception'
import logger from './lib/logger'
import middleware from './lib/middleware'

// Init express
const app = express()

// Middleware
middleware(app)

app.get('/users', (req: Request, res: Response, next: NextFunction) => {
    logger.debug('Debug statement')
    logger.info('Info statement')
    res.json({
        test: 'boom'
    })
})

// Exception handler
exception(app)

// Run HTTP
const port = config.app.port || 7001
app.listen(port, () => logger.info(`Up and running on port ${port}`))
