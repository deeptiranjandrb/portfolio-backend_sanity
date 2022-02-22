export default {
    name: 'testimonials',
    title: 'Testimonias',
    type: 'document',
    fields: [
        {
            name: 'name',
            Title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            Title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl',
            Title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feedback',
            Title: 'Feedback',
            type: 'string',
        }
    ]
}