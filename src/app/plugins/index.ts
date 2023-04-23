import { ApolloServerPlugin } from '@apollo/server'
import forceUpdatePlugin from './forceUpdate'

const plugins: ApolloServerPlugin[] = [
  forceUpdatePlugin,
]

export default plugins