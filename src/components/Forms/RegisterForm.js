import React from 'react';
import { Text, View, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native'
import LoginForm from '../components/Forms/LoginForm';

const RegisterScreen = (props) => {
    return (
        <KeyboardAvoidingView behavior="" style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>Let's get you an account.</Text>
                </View>
            </View>
            <View style={styles.imageWrapper}>
                <ImageBackground source={require('../../assets/login.png')} style={styles.image} />
            </View>
            <View style={styles.formArea}>
                <LoginForm navigation={props.navigation}/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90
    },
    headerLeft: {
        width: '78%'
    },
    title:{
        fontWeight: "700",
        fontSize: 42,
    },
    imageWrapper: {
        width: '100%',
        justifyContent: 'flex-end',
        //backgroundColor: '#f5f5f5',
        position: 'relative',
        height: 200
    },
    image: {
        width: 300,
        height: 200,
        position: 'absolute',
        right: -20
    },
    formArea: {
        marginTop: 30
    }
})

export default RegisterScreen;