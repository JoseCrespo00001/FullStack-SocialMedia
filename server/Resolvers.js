

// aca va a estar ka logica la magia..

const posts = [
    {
        id:1,
        title:'City of the glass',
        description:'“Your Rainbow Panorama” is a Rainbow-coloured glass walkway on the roof of the Danish art museum ARoS Aarhus Kuntsmuseum, by Danish-Icelandic artist Olafur Eliasson.',
        author:'Danish-Icelandic',
        image: 'https://i.pinimg.com/564x/89/30/b0/8930b02ee1d9efaaf0a40328289d0926.jpg',
        like: 233,
        createAt: '2024-06-01T00:00.000Z'
        
    },
    {
        id:2,
        title:'The Portal of the Future',
        description:'In Lithuania, a portal has been built connecting the city to inhabitants of Lublin, Poland, located 376 miles away! Round screens installed in each city center give people the chance to greet their counterparts and gaze, through virtual space, directly into the other city. ',
        author:'Paul Auster',
        image: 'https://i.pinimg.com/564x/32/de/28/32de285993a26c94d27f79db7fffd1d8.jpg',
        like: 63,
        createAt: '2024-06-01T00:00.000Z'
        
    }
]


const resolvers = {
    Query:{
        posts:() => posts
    },
    Mutation:{
        // recibimos los parametros
        addPost:(_, {title, description, image, author}) => {
            const newPost = {
                // nos aseguramos que id va a ser diferente a cualquiera
                id: posts.length + 1,
                title,
                description,
                author,
                image,
                like: 0,
                //nueva fecha que se genera en el momento del new post
                createAt: new Date().toISOString()
            };
            posts.push(newPost);
            return newPost;
        },

        deletePost:(_, {id}) => {
            // eliminando el post de ese id buscamos el index
            const index = posts.findIndex(post => post.id === id);
            // si no existe regresa un menos 1
            if(index !== -1){
                // splice elimina un solo elemento del arreglo que es index
                posts.splice(index, 1);
                return true;
            }
            return false;
        },
        
        likePost: (_, {id}) => {
            const post = posts.find(post => post.id === id);
            if(post){
                // sumamos los likes
                post.like += 1;
                return true;
            }
            return false;
        }
    }
}
// regresan los post


module.exports = resolvers;
