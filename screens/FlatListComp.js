import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListComp = () => {
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
            <Text style={{ fontSize: 22, color: '#000', marginHorizontal: 18, marginTop: 14, }}>
                This is Static Data passed in FlatList form and Array of objects.
            </Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: 'lightblue', padding: 10, marginHorizontal: 18, marginTop: 14, borderRadius: 8 }}>
                        <Text style={{ fontSize: 26, color: '#000', }}>
                            {item.id}. Name: {item.name}
                        </Text>
                        <Text style={{ fontSize: 26, color: '#000', }}>
                            Email: {item.email}
                        </Text>
                    </View>
                }
            />
        </View>
    )
}

export default FlatListComp

const styles = StyleSheet.create({})