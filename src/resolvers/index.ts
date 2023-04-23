import { Resolvers } from './types/generated-types'

import banners from './queries/banners'

const resolvers: Resolvers = {
  Query: {
    banners,
  }
}

export default resolvers