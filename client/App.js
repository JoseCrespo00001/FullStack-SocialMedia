import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import List from "./componentes/List"

// guardar en el cache
const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache()
})


export default function App() {
  return (

    // le pasamos los datos a nuestra apliacion pasmaos las querys

      <ApolloProvider client={client}>
      <View style={styles.container}>
        
        <List/>

      </View>
    </ApolloProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
