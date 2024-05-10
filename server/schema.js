//type definitions

const {gql} = require('apollo-server')




const typeDefs =gql`
    type Post {
        id: Int!
        title: String
        description: String
        author: String
        image: String
        like: Int
        createAt: String
    }
    type Query{
        posts: [Post]
    }

    type Mutation{
        addPost(title:String!, description:String!, image:String!, author:String!) : Post
        deletePost(id:Int!):Boolean
        likePost(id:Int!): Boolean
    }
`;

// el ! significa que es obligatorio

module.exports = typeDefs;


