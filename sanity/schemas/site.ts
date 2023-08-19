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
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
