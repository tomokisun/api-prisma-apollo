import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { join } from 'path'

import { Context } from '../resolvers/types/context'
import resolvers from '../resolvers/index.js'
import createContext from './helpers/createContext'

const schema = loadSchemaSync(join(__dirname, '../schema/schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer<Context>({
  schema: schemaWithResolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const userAgent = req.headers['User-Agent'] as string
    return createContext(userAgent)
  },
}).then(url => {
  console.log(`🚀  Server ready at: ${url}`)
})
