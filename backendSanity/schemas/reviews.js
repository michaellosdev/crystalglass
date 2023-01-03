export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'imageUrl',
            title:'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'description',
            title:'Description',
            type: 'string'
        }
    ],
}