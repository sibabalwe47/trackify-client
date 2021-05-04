import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { LogBox } from 'react-native';

const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    days: yup.string().required().min(3).max(50)
});


const LoginForm = (props) => {
    return (
        <View>
                <Formik
                    initialValues={{
                        title: '',
                        days: ''
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        dispatch(hideModal())
                    }}
                >
                {(props) => (
                    <View style={styles.form}>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('title')}
                                onBlur={props.handleBlur('title')}
                                value={props.values.title}
                                placeholder="Email address"
                            />
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                        </View>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('days')}
                                onBlur={props.handleBlur('days')}
                                value={props.values.days}
                                placeholder="Password"
                            />
                            <Text style={styles.error}>{props.touched.days && props.errors.days}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.passwordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={styles.accountArea}>
                            <Text style={styles.accountText}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => console.log(props)}>
                                <Text style={styles.option}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                </Formik>
            </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#6C63FF',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 50
    },
    input: {
        borderColor: '#f5f5f5',
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        fontSize: 16
        //marginTop: 30
    },
    buttonText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 16
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
        color: '#6C63FF',
        fontSize: 16,
        paddingLeft: 3
    },
    accountArea: {
      alignItems: "flex-end",
      justifyContent: "center",
      paddingVertical: 16,
      flexDirection: "row",
      marginTop: 10
    },
    accountText: {
        color: '#c1c1c1',
        textAlign: 'center',
        fontSize: 16,
        marginRight: 5
    },
    option: {
        color: '#6C63FF',
        fontSize: 16
    }
});

export default LoginForm;