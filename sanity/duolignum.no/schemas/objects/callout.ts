export default {
    name: 'callout',
    type: 'object',
    title: 'Blå blokk',
    fields: [
        {
            name: 'content',
            type: 'array',
            of: [{
                type: 'block',
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' },
                        { title: 'Underline', value: 'underline' },
                    ],
                    annotations: [],
                },
                lists: [],
            }]
        },
    ],
}

