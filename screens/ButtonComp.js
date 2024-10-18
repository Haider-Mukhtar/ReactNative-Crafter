import { Button, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const ButtonComp = () => {
    // Button & onpress event
    function btn1() {
        console.warn("Hello u press a button")
    }
    function btn2(value) {
        console.warn("Hello " + value)
    }
    return (
        <View>
            {/* Button & onpress event */}
            <Text style={{ fontSize: 20, color:'#000' }}>Press btn</Text>
            <Button title="Press me" onPress={btn1}></Button>
            <Text style={{ fontSize: 20, color:'#000' }}>if u want to pass some parameter by funtion on btn press, u have to use arrow function ()=>function(parameter)</Text>
            <Button title="Press me" onPress={() => btn2("Haider")}></Button>
        </View>
    )
}

export default ButtonComp

const styles = StyleSheet.create({})