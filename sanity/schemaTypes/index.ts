import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { annualReport } from './annualReport'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    annualReport
  ],
}
