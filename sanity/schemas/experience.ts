export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
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
      type: 'string',
      title: 'description',
    },
  ],
}