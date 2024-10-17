import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyFatherComponent from './components/MyFatherComponent';

const App = () => {
  const framework = "React Native";
  let email = "reactnative@gmail.com";
  var age = 23;
  function name() {
    return "Haider Mukhtar";
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

    </View>
  )
}

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
      <Text style={{ fontSize: 26, color: 'green' }}>Friend Name: Ali</Text>
      <Text style={{ fontSize: 26, color: 'green' }}>Friend Age: 22</Text>
      <Text style={{ fontSize: 26, color: 'green' }}>Friend Email: friendr@gmail.com</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})