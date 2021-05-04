import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FloatingAction } from 'react-native-floating-action'


const FloatingButton = (props) => {
    return (
        <View style={styles.button}>
            <FontAwesome5 name="plus-circle" size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        borderColor: '#f5f5f5',
        borderWidth: 1
    }
});

export default FloatingButton;