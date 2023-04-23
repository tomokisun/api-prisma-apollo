import { ApolloServerPlugin, GraphQLRequestContext } from '@apollo/server'
import { Context } from '../../resolvers/types/context'
import { GraphQLError } from 'graphql'

const minimumIOSVersion  =  '1.0.0'

export function isUpdateRequired(userAgent: string): boolean {
  return false
}

const forceUpdatePlugin: ApolloServerPlugin = {
  async requestDidStart(requestContext: GraphQLRequestContext<Context>) {
    const userAgent = requestContext.contextValue.userAgent
    if (isUpdateRequired(userAgent)) {
      throw new GraphQLError(
        '',
      )
    }
  }
}

export default forceUpdatePlugin