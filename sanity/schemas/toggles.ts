export default {
  name: 'toggles',
  type: 'document',
  title: 'Funksjonsbrytere',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navn',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug (denne referer man til i koden)',
    },
    {
      name: 'toggle',
      type: 'boolean',
      title: 'Bruk denne til å skru av og på funksjonen',
      default: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
