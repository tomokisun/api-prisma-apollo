import { Context } from '../../resolvers/types/context'

export default function createContext(userAgent: string): Context {
  return {
    userAgent,
  }
}