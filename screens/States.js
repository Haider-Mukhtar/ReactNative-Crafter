import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const States = () => {
    // state 
    const [fname, setFname] = useState("Hadier");
    function updateName() {
        setFname("Mukhtar")
    }
    return (
        <View>
            {/* state */}
            <Text style={{ fontSize: 20, color: 'black' }}>My Name is {fname}.</Text>
            <Button title="Update Name" onPress={updateName}></Button>
        </View>
    )
}

export default States

const styles = StyleSheet.create({})