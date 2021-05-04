import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <View style={styles.backButton}>
                    <Image source={require('../../../assets/backbutton.png')} style={styles.icon}/>
                </View>
            </TouchableOpacity>
            <View style={styles.headerText}>
                <Text style={styles.headerTitle}>{props.title && props.title}</Text>
                <Text style={styles.headerSubtitle}>{props.subtitle && props.subtitle}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 270,
        backgroundColor: '#575A89',
        paddingHorizontal: 20,
        paddingTop: 70,
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
    },
    icon: {
        width: 18,
        height: 13,
    },
    backButton: {
        marginBottom: 40
    },
    headerTitle: {
        fontSize: 24,
        color: 'white',
        fontFamily: "Montserrat_700Bold"
    },
    headerSubtitle: {
        color: 'white',
        fontFamily: "Montserrat_400Regular"
    },
    headerText: {
        position: 'absolute',
        left: 20,
        bottom: 60
    }
});

export default Header;