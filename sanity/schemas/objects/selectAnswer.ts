export default {
  name: 'selectAnswer',
  type: 'object',
  title: 'Velg svar',
  fields: [
    {
      name: 'answers',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
