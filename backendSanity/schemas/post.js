export default {
    name:  'post',
    title: 'Post',
    type:'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'imageUrl',
            title:'ImgURL',
            type: 'image',
        }
    ]
}