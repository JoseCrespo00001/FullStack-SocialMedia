import {gql, useQuery} from '@apollo/client'
import {SafeAreaView, ScrollView,Text, View} from 'react-native'
import Card from './Card'
// copio la query desde la pagina que sabes que funciona 
const GET_POSTS = gql `
    query GetPost {
        posts {
        id
        author
        createAt
        description
        image
        like
        title
        }
    }
`

export default function List() {
    const {loading, error, data} = useQuery(GET_POSTS, { pollInterval:1000});
    
    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>

   // console.log(data)
    
    return(
        <SafeAreaView>
            <ScrollView
                contentContainerStyle ={{
                    alignItems:"center",
                    background:"#f5f5f5",
                }}
            >
                 <Text style={{fontSize: 26, fontWeight: '900', color: '#00000090', marginVertical:20}}>This are the News</Text>
                {data.posts.map((post) => (
                    <Card key ={post.id} {...post}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
