import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyFatherComponent from '../components/MyFatherComponent'

const Components = () => {
    return (
        <View>
            {/* Components */}
            <MyComponent />
            <MyFriendComponent />
            {/* cmponent form another file or folder */}
            <MyFatherComponent />
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

export default Components

const styles = StyleSheet.create({
    compText: {
        fontSize: 26,
        color: 'green',
        backgroundColor: 'pink',
        padding: 5,
        textAlign: 'center'
    }
})