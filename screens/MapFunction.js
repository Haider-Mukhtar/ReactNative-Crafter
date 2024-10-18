import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


const MapFunction = () => {
    const users = [
        {
            id: 1,
            name: "Haider",
            email: "haider@gmail.com"
        },
        {
            id: 2,
            name: "Ali",
            email: "ali@gmail.com"
        },
        {
            id: 3,
            name: "Hamza",
            email: "hamza@gmail.com"
        },
        {
            id: 4,
            name: "Shoaib",
            email: "shoaib@gmail.com"
        },
        {
            id: 5,
            name: "Arham",
            email: "arham@gmail.com"
        },
    ]
    return (
        <View>
            <Text style={{ fontSize: 22, color: '#000', marginHorizontal: 18, marginTop: 14, textAlign:'justify' }}>
            Map Function is a javascript Function, used to make list of elements. Map list dont make screen scrollable automatically. 
            So, we user ScrollView form React Native.
            </Text>
            <ScrollView>
                {
                    users.map((item) =>
                        <View style={{ backgroundColor: 'lightblue', padding: 10, marginHorizontal: 18, marginTop: 14, borderRadius: 8 }}>
                            <Text style={{ fontSize: 26, color: '#000', }}>
                                {item.id}. Name: {item.name}
                            </Text>
                            <Text style={{ fontSize: 26, color: '#000', }}>
                                Email: {item.email}
                            </Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

export default MapFunction

const styles = StyleSheet.create({})