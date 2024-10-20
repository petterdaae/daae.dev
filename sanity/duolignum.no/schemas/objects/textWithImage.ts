
export default {
    name: 'textWithImage',
    type: 'object',
    title: 'Tekst med bilde',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
        },
        {
            name: 'text',
            type: 'string',
            title: 'Tekst',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Bilde',
        },
        {
            name: 'rightAlign',
            type: 'boolean',
            title: 'Plasser bilde til høyre',
        },
    ],
}
