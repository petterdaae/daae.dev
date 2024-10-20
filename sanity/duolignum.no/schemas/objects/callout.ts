export default {
    name: 'callout',
    type: 'object',
    title: 'Blå blokk',
    fields: [
        {
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ],
}

