export default {
  name: 'experience',
  type: 'object',
  title: 'Erfaring',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
    },
    {
      name: 'keywords',
      type: 'array',
      of: [
        {
          name: 'keyword',
          type: 'string',
          title: 'Keyword',
        },
      ],
      title: 'Keywords',
    },
    {
      name: 'description',
      type: 'text',
      title: 'description',
    },
  ],
}
