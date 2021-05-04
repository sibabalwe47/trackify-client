import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Category from './Category'
import { cateogories } from '../../helpers/data';
import GlobalModal from '../Modal';
import { showModal } from '../../store/actions/modals/ModalActions'
import { useDispatch, useSelector } from 'react-redux'

const Categories = (props) => {

    const dispatch = useDispatch();
    
    return (
        <View style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Categories')}>
                    <Text style={styles.seeAll}>See All </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <TouchableOpacity style={styles.addCategory} onPress={() => dispatch(showModal('add-category'))}> 
                   <View style={styles.addText}>
                       <Text style={styles.text}>+</Text>
                   </View>
                </TouchableOpacity>
                <FlatList
                    data={cateogories}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Category navigation={props.navigation} category={item.category} icon={item.icon} />}
                    numColumns={4}
                />
            </View>
            <GlobalModal  />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 45,
    },
    title: {
        fontSize: 14,
        color: "#575A89",
        marginBottom: 15,
        fontFamily: "Montserrat_700Bold",
    },
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    seeAll: {
        fontWeight: "400",
        fontSize: 12,
        color: "#FF5A5F",
        marginBottom: 15,
        fontFamily: 'Montserrat_400Regular'
    },
    addCategory: {
        width: 140,
        height: 170,
        backgroundColor: '#FF5A5F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    addText: {
        width: 42,
        height: 42,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
    },
    
    categories: {
        flexDirection: 'row'
    }
});

export default Categories;