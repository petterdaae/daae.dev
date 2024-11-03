import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'daae.dev',

  projectId: '9ijxh2qg',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => "http://daae.dev?preview=true"
  }
})
