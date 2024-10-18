import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextInputComp = () => {
    // textinput
    const [something, setSomething] = useState();
    return (
        <View>
            {/* TextINput */}
            <TextInput
                placeholder='Enter something'
                style={{ borderWidth: 2, borderColor: 'red', margin: 10, padding: 10, fontSize: 20 }}
                value={something}
                onChangeText={(txt) => setSomething(txt)}
            />
            <Text style={{ fontSize: 20, color: 'red' }}>You write: {something}</Text>
            <Button title="clear" onPress={() => setSomething()}></Button>
        </View>
    )
}

export default TextInputComp

const styles = StyleSheet.create({})