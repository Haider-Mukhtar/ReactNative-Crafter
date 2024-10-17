import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const framework="React Native";
  let email="reactnative@gmail.com";
  var age=23;
  function name () {
    return "Haider Mukhtar";
  }
  return (
    <View>
      <Text style={{fontSize:30, fontStyle:'italic'}}>hello react native app.</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{framework}</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{email}</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{age}</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{name()}</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{100+20}</Text>
      <Text style={{fontSize:30, fontStyle:'italic'}}>{100*20}</Text>
      <Text style={{fontSize:30}}>{age == 20 ? "Age is above 20" : "Age unknow"}</Text>


    </View>
  )
}

export default App

const styles = StyleSheet.create({})