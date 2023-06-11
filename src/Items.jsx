import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import DeleteIcon from './assets/delete.png'

const Items = ({ name, onPress }) => {
    return (
        <View style={styles.items}>
            <Text style={styles.defaultText}>
                {name}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Image source={DeleteIcon} style={styles.deleteIcon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        borderColor: '#c9ccd1',
        borderWidth: 1.5,
        borderRadius: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 17,
        marginBottom: 10,
        shadowColor: '#c9ccd1'
    },
    deleteIcon: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    defaultText: {
        color: 'black',
        fontSize: 15
    }
})

export default Items;
