import * as dotenv from 'dotenv'

dotenv.load()

export default {
    app: {
        logLevel: process.env.APP_LOG_LEVEL,
        port: process.env.APP_PORT
    }
}
