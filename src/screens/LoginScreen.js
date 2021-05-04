import React from 'react';
import { Text, View, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import LoginForm from '../components/Forms/LoginForm';
import { Formik } from 'formik'
import * as yup from 'yup'
import { LogBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/actions/auth/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiUrl from '../../config';

const formSchema = yup.object({
    Email: yup.string().required().min(3).max(50),
    Password: yup.string().required().min(3).max(50)
});


const LoginScreen = (props) => {
    const dispatch = useDispatch();
    const { isAuthenticated, isLoading } = useSelector(state => state.auth);
    const navData = props.navigation;


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Formik
                initialValues={{
                    Email: '',
                    Password: ''
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    // // Get login values
                    // const { Email, Password } = values;
                    // // Dispatch login method
                    // dispatch(loginUser({Email, Password})).then(async (result) => {
                    //     console.log('Result:', result);

                    //     if(result.success) {
                    //         try {
                    //             await AsyncStorage.setItem('token', result.token)
                    //             navData.navigate('Dashboard')
                    //         } catch (error) {
                    //             console.log(error);
                    //         }
                    //     }
                    // }).then(err => console.log(err));
                }}
            >
                {(props) => (
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <Text style={styles.headerTitle}>Let's sign you in.</Text>
                            </View>
                        </View>
                        <View style={styles.imageWrapper}>
                            <ImageBackground source={require('../../assets/login.png')} style={styles.image} />
                        </View>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('Email')}
                                onBlur={props.handleBlur('Email')}
                                value={props.values.Email}
                                placeholder="Email address"
                            />
                            <Text style={styles.error}>{props.touched.Email && props.errors.Email}</Text>
                        </View>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('Password')}
                                onBlur={props.handleBlur('Password')}
                                value={props.values.Password}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <Text style={styles.error}>{props.touched.Password && props.errors.Password}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.passwordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                            
                            {!isLoading && (<Text style={styles.buttonText}>LOGIN</Text>)}
                            {isLoading && isLoading && (<Text style={styles.loaderButton}>
                                Loading...
                            </Text>)}
                        </TouchableOpacity>
                        <View style={styles.accountArea}>
                            <Text style={styles.accountText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navData.navigate('Register')}>
                                <Text style={styles.option}>Register.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
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
        width: '85%'
    },
    headerTitle:{
        //fontWeight: "700",
        fontSize: 40,
        fontFamily: "Montserrat_700Bold",
        color: "#575A89"
    },
    imageWrapper: {
        width: '94%',
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
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FF5A5F',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        height:62
        //justifyContent: 'space-between'
    },
    input: {
        borderColor: '#f5f5f5',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        fontSize: 14,
        backgroundColor: '#f5f5f5',
        fontFamily: "Montserrat_500Medium",
        color: "#575A89"
        //marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: "Montserrat_700Bold"
    },
    iconsContainer: {
        borderColor: '#f5f5f5',
        borderWidth: 2,
        borderRadius: 5,
        height: 280,
        marginBottom: 50,
        padding: 10,
    },
    iconWrapper: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#f5f5f5'
        //marginRight: 15
    },
    passwordText: {
        color: '#FF5A5F',
        fontSize: 12,
        paddingLeft: 3,
        fontFamily: "Montserrat_400Regular"
    },
    accountArea: {
      alignItems: "flex-end",
      justifyContent: "center",
      paddingVertical: 16,
      flexDirection: "row",
      marginTop: 10
    },
    accountText: {
        color: '#575A89',
        textAlign: 'center',
        fontSize: 14,
        marginRight: 5,
        fontFamily: "Montserrat_400Regular"
    },
    option: {
        color: '#FF5A5F',
        fontSize: 14,
        fontFamily: "Montserrat_500Medium"
    },
    error: {
        fontSize: 11,
        paddingTop: 3,
        paddingBottom: 10,
        paddingHorizontal: 3,
        color: '#6C63FF',
        textAlign: 'right'
    },
    loaderButton: {
        // width: 10,
        // height: 10,
        // position: 'relative'
        color: '#fff',
        fontSize: 12
    },
    spinner: {
        // width: 30,
        // height: 30,
    }
})

export default LoginScreen;