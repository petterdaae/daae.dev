export default {
  name: 'page',
  type: 'document',
  title: 'Sider',
  fields: [
    {
      name: 'path',
      type: 'string',
      title: 'Path',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blokker',
      of: [
        {
          type: 'splitHeader',
        },
        {
          type: 'experience',
        },
        {
          type: 'header',
        },
        {
          type: 'plainText',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'path',
    },
  },
}
