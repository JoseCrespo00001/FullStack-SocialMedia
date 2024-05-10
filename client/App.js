import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Home from "./screens/Home"
import Add from './screens/Add'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// guardar en el cache
const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache()
})

const Stack = createStackNavigator()

function MyStack(){
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name ="Home" component = {Home}/>
        <Stack.Screen name ="Add" component = {Add} options={{presentation: 'modal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default function App() {
  return (

    // le pasamos los datos a nuestra apliacion pasmaos las querys

    <ApolloProvider client={client}>
        <MyStack/>
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
