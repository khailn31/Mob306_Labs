import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScren from './HomeScren';
import Lab4 from './Lab4/Lab4';
import Lab4_b2 from './Lab4/Lab4_b2';
import lab4_b3 from './Lab4/Lab4_b3';
import lab5 from './Lab5/lab5';
import lab6 from './lab6/lab6';
import lab7 from './lab7/lab7';
import lab7_b2 from './lab7/lab7_b2';
import Lab8 from './lab8';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScren}
        />
         <Stack.Screen
          name="Lab4"
          component={Lab4}
        />
        <Stack.Screen 
          name="Lab4_b2"
          component={Lab4_b2}/>
            <Stack.Screen 
          name="Lab4_b3"
          component={lab4_b3}/>
     
      <Stack.Screen 
          name="lab5"
          component={lab5}/>
            <Stack.Screen 
          name="lab6"
          component={lab6}/>
             <Stack.Screen 
          name="lab7"
          component={lab7}/>
               <Stack.Screen 
          name="lab7_b2"
          component={lab7_b2}/>
                  <Stack.Screen 
          name="lab8"
          component={Lab8}/>
         
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default App
