export default {
  name: 'concert',
  type: 'document',
  title: 'Konserter',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      validation: rule => rule.required()
    },
    {
      name: 'date',
      type: 'date',
      title: 'Dato',
      validation: rule => rule.required()
    },
    {
      name: 'time',
      type: 'string',
      title: 'Tid',
      validation: rule => rule.required()
    },
    {
      name: 'hideButton',
      type: 'boolean',
      title: 'Skjul knapp'
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Tekst på knapp',
    },
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Lenke knappen skal gå til'
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
