import { Banner } from '../types/generated-types'
import { Context } from '../types/context'

export default function banners(_: unknown, __: unknown, context: Context): Promise<Banner[]> {
  return new Promise((resolve) => {
    resolve([])
  })
}
