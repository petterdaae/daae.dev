export default {
  name: 'site',
  type: 'document',
  title: 'Sider',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'navn',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blokker',
      of: [
        {
          type: 'plainText',
        },
        {
          type: 'header',
        },
        {
          type: 'checkbox',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
