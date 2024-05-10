import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import List from '../componentes/List'
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Home(){
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:()=>(
        <TouchableOpacity
        style = {StyleSheet.btn}
        onPress={() => navigation.navigate('Add')}
        >
          <Ionicons name='add-circle-sharp' size={35} color="#181818" marginRight={30} />
        </TouchableOpacity>
      )
  });
 },[navigation])
  return (

      <List/>

  )
}
const Style=StyleSheet.create({
  btn:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    position:"absolute"
  }
})


