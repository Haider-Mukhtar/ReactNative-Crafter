import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';

const BasicForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [display, setDisplay] = useState(false);
    const clearData = () => {
        setDisplay(false),
            setEmail(),
            setName(),
            setPassword()
    }
    return (
        <View>
            <Text style={styles.header}>Basic Form</Text>
            <TextInput
                placeholder='Enter your name:'
                placeholderTextColor={{ color: '#000' }}
                style={{ borderWidth: 2, borderColor: 'grey', marginHorizontal: 18, marginTop:12, padding: 12, fontSize: 20, borderRadius: 12, color: '#000' }}
                value={name}
                onChangeText={(txt) => setName(txt)}
            />
            <TextInput
                placeholder='Enter your email:'
                placeholderTextColor={{ color: '#000' }}
                style={{ borderWidth: 2, borderColor: 'grey', marginHorizontal: 18, marginTop:14, padding: 12, fontSize: 20, borderRadius: 12, color: '#000' }}
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <TextInput
                placeholder='Enter your password:'
                placeholderTextColor={{ color: '#000' }}
                secureTextEntry={true}
                style={{ borderWidth: 2, borderColor: 'grey', marginHorizontal: 18, marginTop:14, padding: 12, fontSize: 20, borderRadius: 12, color: '#000' }}
                value={password}
                onChangeText={(txt) => setPassword(txt)}
            />
            <TouchableOpacity style={styles.btn} onPress={() => setDisplay(true)}>
                <Text style={styles.txt}>
                    Print Data
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { backgroundColor: 'red' }]} onPress={() => clearData()}>
                <Text style={styles.txt}>
                    Clear Data
                </Text>
            </TouchableOpacity>
            {
                display ?
                    <View style={styles.card}>
                        <Text style={styles.header}>Your name is: {name}</Text>
                        <Text style={styles.header}>Your email is: {email}</Text>
                        <Text style={styles.header}>Your password is: {password}</Text>
                    </View>
                    : null
            }
        </View>
    )
}

export default BasicForm

const styles = StyleSheet.create({
    btn: {
        marginTop: 14,
        marginHorizontal: 18,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
    },
    txt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:12,
        color:'#000',
    },
    card: {
        backgroundColor:'lightgrey',
        paddingVertical:20,
        borderRadius:20,
        marginVertical:18,
        marginHorizontal:20,
    }
})