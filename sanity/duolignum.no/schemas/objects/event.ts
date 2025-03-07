export default {
    name: 'event',
    type: 'object',
    title: 'Arrangement',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Dato',
        },
        {
            name: 'time',
            type: 'string',
            title: 'Time',
        },
        {
            name: 'location',
            type: 'string',
            title: 'Sted',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Beskrivelse',
        },
        {
            name: 'buyTicketsLink',
            type: 'string',
            title: 'Lenke for kjøp av billetter'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Bilde',
        },
    ],
}
