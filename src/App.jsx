import React, { useState } from "react"
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import AddIcon from './assets/plus.png'
import Items from "./Items"

const App = () => {

    const [name, setName] = useState("")
    const [items, setItems] = useState([])

    const addData = () => {
        
        if(!name) {
            Alert.alert("Isi Task Anda")
        } else {
            setItems([
                ...items,
                name
            ])
            setName("")
        }

    }

    const deleteData = (id) => {
        let hapus = items
        hapus.splice(id, 1)

        setItems([
            ...hapus
        ])
    }

    return (
        <View style={styles.body}>
           <View style={styles.navbarBg}>
                <Text style={styles.headerText}>To do Apps</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.inputText}>
                    <TextInput placeholder="Your Task" style={styles.inputField} maxLength={25} placeholderTextColor='grey' value={name} onChangeText={(value) => setName(value)}/>
                    <TouchableOpacity onPress={addData}>
                        <Image source={AddIcon} style={styles.addIcon}/>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {items.map((list, index) => {
                        return <Items key={index} name={list} onPress={() => deleteData(index)}/>
                    })}
                </ScrollView>
            </View>

        </View>
    )
}

export default App

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 1
    },
    navbarBg: {
        backgroundColor: '#1f50cc',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        marginHorizontal: 30,
        paddingVertical: 35
    },
    inputText: {
        borderWidth: 2.5,
        borderColor: '#5c9bfa',
        paddingVertical: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputField: {
        paddingVertical: 0,
        flex: 1,
        color: 'black'
    },
    addIcon: {
        width: 25,
        height: 25,
        marginLeft: 10
    }
})