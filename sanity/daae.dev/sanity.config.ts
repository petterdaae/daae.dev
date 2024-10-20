import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'daae.dev',

  projectId: '9ijxh2qg',
  dataset: 'production',

  plugins: [],

  schema: {
    types: schemaTypes,
  },
})
