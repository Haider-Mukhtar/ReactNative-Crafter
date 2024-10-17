import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import MyFatherComponent from './components/MyFatherComponent';

const App = () => {
  const framework = "React Native";
  let email = "reactnative@gmail.com";
  var age = 23;
  function name() {
    return "Haider Mukhtar";
  }

  // Button & onpress event
  function btn1() {
    console.warn("Hello u press a button")
  }
  function btn2(value) {
    console.warn("Hello " + value)
  }

  // state 
  const [fname, setFname] = useState("Hadier");
  function updateName() {
    setFname("Mukhtar")
  }

  return (
    <View>

      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>hello react native app.</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{framework}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{email}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{age}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{name()}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{100 + 20}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{100 * 20}</Text>
      <Text style={{ fontSize: 30 }}>{age == 20 ? "Age is above 20" : "Age unknow"}</Text>

      {/* Components */}
      <MyComponent />
      <MyFriendComponent />
      <MyFatherComponent />

      {/* Button & onpress event */}
      <Text style={{ fontSize: 20 }}>Press btn</Text>
      <Button title="Press me" onPress={btn1}></Button>
      <Text style={{ fontSize: 20 }}>if u want to pass some parameter by funtion on btn press, u have to use arrow function ()=>function(parameter)</Text>
      <Button title="Press me" onPress={() => btn2("Haider")}></Button>

      {/* state */}
      <Text style={{ fontSize: 20 , color:'black'}}>My Name is {fname}.</Text>
      <Button title="Update Name" onPress={updateName}></Button>

    </View>
  )
}

// Components
const MyComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 26, color: 'red' }}>Name: Hider</Text>
      <Text style={{ fontSize: 26, color: 'red' }}>Age: 23</Text>
      <Text style={{ fontSize: 26, color: 'red' }}>Email: haider@gmail.com</Text>
    </View>
  )
}
const MyFriendComponent = () => {
  return (
    <View>
      <Text style={styles.compText}>Friend Name: Ali</Text>
      <Text style={styles.compText}>Friend Age: 22</Text>
      <Text style={styles.compText}>Friend Email: friendr@gmail.com</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  compText:{
    fontSize: 26,
    color: 'green',
    backgroundColor: 'pink',
    padding: 5,
    textAlign:'center'
  }
})