import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('HelloWorld')}>
        <Text style={styles.txt}>
          Hello World
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ButtonComp')}>
        <Text style={styles.txt}>
          Button Comp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Components')}>
        <Text style={styles.txt}>
          Components
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('States')}>
        <Text style={styles.txt}>
          States
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TextInputComp')}>
        <Text style={styles.txt}>
          TextInput Comp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BasicForm')}>
        <Text style={styles.txt}>
          Basic Form
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  btn: {
    marginTop: 14,
    marginHorizontal: 14,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})