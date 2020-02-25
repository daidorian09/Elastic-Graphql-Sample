import express from 'express'
import morgan from 'morgan'
import bodyParser from'body-parser'
import logger from './utils/logger/logger'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { ApiElasticSearchClient } from './elasticsearch/service'
import schemas from './graphql/schemas';

require('dotenv').config({
    path: 'variables.env'
})

const app = express()

//#region content-type support
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//#endregion

//#region http request logger
app.use(morgan('combined', { stream: logger.stream }))
//#endregion

//#region cors support
app.use(cors())
//#endregion

const PORT = process.env.PORT;

if(!PORT) {
    logger.error("Port number is undefined... App is shut down now")
    process.exit(0)
}

const apolloServer = new ApolloServer({
    schema : schemas.schema,
    playground : true,
})

app.get('/search', ApiElasticSearchClient);

apolloServer.applyMiddleware({app})

app.listen(PORT, () => {
    logger.info(`🚀 Elastic-Graphql app is now running on http://localhost:${PORT}/${apolloServer.graphqlPath}`)
})