const CenteredDecorator = (props: any) => (
  <div style={{ textAlign: "center", width: "100%" }}>{props.children}</div>
);

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
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Centered', value: 'center', icon: () => 'C', component: CenteredDecorator }
            ],
            annotations: [],
          },
          lists: [],
        },
        { type: 'altImage' },
        { type: 'textWithImage' },
        { type: 'callout' },
        { type: 'events' },
        { type: 'youtube' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'path',
    },
  },
}
