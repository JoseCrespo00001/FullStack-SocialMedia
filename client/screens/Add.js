import * as React from 'react';

import { SafeAreaView, Text, Button, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { gql, useMutation } from '@apollo/client';

const CREATE_POST = gql`
  
    mutation AddPost($addPostTitle2: String!, 
    $addPostDescription2: String!,
    $addPostImage2: String!,
    $addPostAuthor2: String!)
    {
        addPost(title: $addPostTitle2, 
        description: $addPostDescription2, 
        image: $addPostImage2, 
        author: $addPostAuthor2) 
        {
            id
            title
            description
            image
            author
            like
            createAt
        }
    }

`;

export default function Add() {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('https://lh5.googleusercontent.com/p/AF1QipNOnlzBeblAxykNlewxCcpm_p0D2PUCuW6JA1dJ=w1080-h624-n-k-no');
    const [author, setAuthor] = React.useState('');

    const [createPost, { loading, error }] = useMutation(CREATE_POST, {
        variables: {
            addPostTitle2: title,
            addPostDescription2: description,
            addPostImage2: image,
            addPostAuthor2: author
        },
        onCompleted: (data) => {
            console.log(data);
            Alert.alert("Post creado", "Tu post ha sido creado exitosamente.");
        },
        onError: (error) => {
            Alert.alert("Error al crear post", error.message);
        }
    });

    if (loading) return <Text>Cargando...</Text>;
    if (error) return <Text>Error al crear el post.</Text>;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 26, marginVertical: 20, fontWeight: '900', color: '#00000090'}}>Comparte algo con la comunidad</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setTitle} 
                    placeholder="Título" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setDescription}
                    placeholder="Descripción" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setAuthor}
                    placeholder="Autor" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setImage}
                    value={image}
                    placeholder="URL de la imagen" style={styles.textInput} />
            </View>
            <TouchableOpacity onPress={createPost} style={styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#00000090'}}>Publicar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAF5F0',
      alignItems: 'center',
    },
    inputContainer: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#ECE6E0',
    },
    textInput: {
      paddingLeft: 10,
      flex: 1,
      height: 50,
      fontWeight: 'bold',
      fontSize: 16,
      color: '#00000090',
    },
    button: {
        borderRadius: 20,
        height: 50,
        width: '90%',
        backgroundColor: '#FFBBC2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
  });