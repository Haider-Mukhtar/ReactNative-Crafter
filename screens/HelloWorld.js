import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelloWorld = () => {
    const framework = "React Native";
    let email = "reactnative@gmail.com";
    var age = 23;
    function name() {
        return "Haider Mukhtar";
    }
    return (
        <View>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>hello react native app.</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{framework}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{email}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{age}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{name()}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{100 + 20}</Text>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color:'#000000' }}>{100 * 20}</Text>
            <Text style={{ fontSize: 20, color:'#000000' }}>{age == 20 ? "Age is above 20" : "Age unknow"}</Text>
        </View>
    )
}

export default HelloWorld

const styles = StyleSheet.create({})