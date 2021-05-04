import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Category = (props) => {
    return ( 
        <TouchableOpacity style={styles.category} onPress={() => props.navigation.navigate('CategoryDetails', {
            title: 'Spiritual Growth',
            subtitle: 'April'
        })}>
            <View style={styles.iconWrapper}>
                <View style={styles.icon}>
                    <FontAwesome style={styles.mainIcon} name={props.icon && props.icon} size={18} color="#575A89" />
                </View>
            </View>
            <Text style={styles.categoryTitle}>{props.category && props.category}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    category: {
        width: 140,
        height: 170,
        backgroundColor: '#fff',
        borderColor: "#f5f5f5",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    iconWrapper: {},
    icon: {
        width: 45,
        height: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 30
    },
    categoryTitle: {
        fontFamily: "Montserrat_600SemiBold",
        color: "#FF5A5F",
        fontSize: 12
    },
    mainIcon: {
        color: "#484848"
    }
});

export default Category;