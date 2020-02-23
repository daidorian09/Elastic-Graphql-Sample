import { makeExecutableSchema } from 'graphql-tools'

//#region Type Definitions
const productTypeDefs = require('./types/product/typeDefs').default
//#endregion


//#region Resolver Definitions
const productResolvers = require('./types/product/resolvers').default
//#endregion

const query = `
#Apollo Server Graphql Queries
type Query {
  ${productTypeDefs.query.join(',')}
}`

const typeDefs = [
  productTypeDefs.typeDefs,
  query
]

const resolvers = {
  Query: {
   ...productResolvers.resolvers.Query
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default { schema }