import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { d3 } from 'd3' 

const PieChart = () =>{
    // data represents the distribution of spendings in a month 
    const data = [ 
        {"number":  8, "name": 'Fun activities'},
        {"number": 7, "name": 'Dog'},
        {"number": 16, "name": 'Food'},
        {"number": 23, "name": 'Car'},
        {"number": 42, "name": 'Rent'},
        {"number":  4, "name": 'Misc'}, 
      ];


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

export default PieChart;