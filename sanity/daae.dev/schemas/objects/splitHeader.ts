export default {
  name: 'splitHeader',
  type: 'object',
  title: 'Delt overskrift',
  fields: [
    {
      name: 'left',
      type: 'string',
      title: 'Venstre',
    },
    {
      name: 'right',
      type: 'string',
      title: 'Høyre',
    },
  ],
  preview: {
    select: {
      left: 'left',
      right: 'right',
    },
    prepare(selection) {
      const {left, right} = selection
      return {
        title: `${left}${right}`,
      }
    },
  },
}
