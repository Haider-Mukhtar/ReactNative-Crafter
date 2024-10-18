import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Menu from './screens/Menu';
import HelloWorld from './screens/HelloWorld';
import ButtonComp from './screens/ButtonComp';
import Components from './screens/Components';
import States from './screens/States';
import TextInputComp from './screens/TextInputComp';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
        <Stack.Screen name="ButtonComp" component={ButtonComp} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
        <Stack.Screen name="Components" component={Components} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
        <Stack.Screen name="States" component={States} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
        <Stack.Screen name="TextInputComp" component={TextInputComp} options={{ headerStyle: { backgroundColor: '#007bff', }, headerTintColor: '#fff', }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})