import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { topRankedHabits } from '../../helpers/data';
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import GlobalModal from "../Modal";
import { showModal } from '../../store/actions/modals/ModalActions'

const Item = (props) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('CategoryDetails', {
            title: 'Spiritual Growth',
            subtitle: 'April'
        })}>
            <View style={styles.item}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemText}>
                        {props.habit}
                    </Text>
                    <TouchableOpacity onPress={() => dispatch(showModal('edit-category'))}>
                        <View style={styles.iconWrapper}>
                            <FontAwesome name="pencil" size={18} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const HeaderTitle = (props) => (
    <Text style={styles.title}>{props.title}</Text>
)

const AllCategories = (props) => {
    return (
        <View>
            <FlatList
            data={topRankedHabits}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item habit={item.habit} id={item.id} navigation={props.navigation}/>}
            ListHeaderComponent={<HeaderTitle title="Categories"  style={styles.container} />}
            />
            <GlobalModal />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#c1c1c1',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 35
    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        // shadowColor: "rgb(255,255,255)",
        // shadowOffset: {
        //   width: 0,
        //   height: 5
        // },
        // shadowOpacity: 0.12,
        // shadowRadius: 2,
        // elevation: 1
    },
    itemText: {
        color: '#FF5A5F',
        fontFamily: "Montserrat_700Bold",
        fontSize: 12
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "#575A89",
        fontFamily: "Montserrat_700Bold",
        marginBottom: 30
    },
    container: {
        marginBottom: 30
    }  
})

export default AllCategories;