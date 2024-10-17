import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyFatherComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 26, color:'blue' }}>Name: Mukhtar</Text>
      <Text style={{ fontSize: 26, color:'blue' }}>Age: 55</Text>
      <Text style={{ fontSize: 26, color:'blue' }}>Email: mukhtar@gmail.com</Text>
    </View>
  )
}

export default MyFatherComponent

const styles = StyleSheet.create({})