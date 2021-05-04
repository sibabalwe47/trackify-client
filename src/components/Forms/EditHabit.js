import React, { useEffect } from 'react'
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { useDispatch } from 'react-redux'
import { hideModal } from '../../store/actions/modals/ModalActions'
import { Formik } from 'formik'
import * as yup from 'yup'
import { LogBox } from 'react-native';


const formSchema = yup.object({
    title: yup.string().required().min(3).max(50),
    days: yup.number().required().min(1)
});


const EditHabit = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <View style={styles.form}>
            
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
                        <Text style={styles.title}>Edit habit</Text>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('title')}
                                onBlur={props.handleBlur('title')}
                                value={props.values.title}
                            />
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                        </View>
                        <View style={styles.titleInput}>
                            <TextInput 
                                style={styles.input}
                                onChangeText={props.handleChange('days')}
                                onBlur={props.handleBlur('days')}
                                value={props.values.days}
                                keyboardType='numeric'
                            />
                            <Text style={styles.error}>{props.touched.days && props.errors.days}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                )}
                </Formik>
            </View>
            
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
        marginTop: 20
    },
    input: {
        borderColor: '#f5f5f5',
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
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
    }
});

export default EditHabit;