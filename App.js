/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  I
} from 'react-native';
import axios from 'axios';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import postmanCollection from './json-server-collection.postman_collection.json';
const postsRequest = postmanCollection.item.find(item => item.name === "Posts").request;
const createPostRequest = postmanCollection.item.find(item => item.name === "CreatePost").request;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import addChilp from './src/addchiproz'
import { Screens } from './src/helpers/screens';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


// Function to make a GET request to "Posts"
const getPosts = async () => {
   
   try {
   
  
    const response = await axios.get(createPostRequest.url.raw);
    console.log('GET Posts Response:', response);
  } catch (error) {
    console.error('GET Posts Error:', error);
  }
};

// Function to make a POST request to "CreatePost"
const createPost = async () => {
  try {
    const response = await axios.post(createPostRequest.url.raw, createPostRequest.body.raw, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('POST CreatePost Response:', response.data);
  } catch (error) {
    console.error('POST CreatePost Error:', error);
  }
};

// Call the functions as needed




function App(): JSX.Element {
  var Stack = createNativeStackNavigator()
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#091224",


  };
  useEffect(() => {
    getPosts().then(() => {
      console.log(sucess)
    }).catch(() => {
      console.log("error")
    })
    // createPost();

  }, [])

  return (

    <SafeAreaView style={{ flex: 1, }}>
  
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

          {Screens.map((route) => { return (<Stack.Screen name={route.name} component={route.component}/>) }) }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}



export default App;
