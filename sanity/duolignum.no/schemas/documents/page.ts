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
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'altImage' },
        { type: 'event' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'path',
    },
  },
}
