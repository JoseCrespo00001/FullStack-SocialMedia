const {ApolloServer, gql} = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./Resolvers')


// const typeDefs =gql`
//     type Post {
//         id: Int!
//         title: String
//         description: String
//         author: String
//         image: String
//         like: Int
//         createAt: String
//     }
//     type Query{
//         posts: [Post]
//     }
// `;


// const posts = [
//     {
//         id:1,
//         title:'City of the glass',
//         description:'This is a post',
//         author:'Kate chopin',
//         image: 'https://www.blog.jimdoty.com/wp-content/uploads/170508-Delong-fence-post-o-Fark-001.jpg',
//         like: 0,
//         createAt: '2024-06-01T00:00.000Z'
        
//     },
//     {
//         id:2,
//         title:'The Awakening',
//         description:'This is a post',
//         author:'Paul Auster',
//         image: 'https://www.blog.jimdoty.com/wp-content/uploads/170508-Delong-fence-post-o-Fark-001.jpg',
//         like: 222,
//         createAt: '2024-06-01T00:00.000Z'
        
//     }
// ]


// const resolvers = {
//     Query:{
//         posts:() => posts
//     }
// }

const server = new ApolloServer({
    typeDefs,
    resolvers
})


// regresa una promesa
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})