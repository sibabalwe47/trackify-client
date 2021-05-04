import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'


const BarGraph = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.month}>April</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 256,
        marginTop: 60,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    month: {
        fontFamily: "Montserrat_700Bold",
        color: "#575A89"
    }
});

export default BarGraph;