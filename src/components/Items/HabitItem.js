import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { topRankedHabits } from '../../helpers/data';
import { useDispatch } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { showModal } from '../../store/actions/modals/ModalActions'

const Item = (props) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('HabitDetails', {
            title: 'Reading scripture',
            subtitle: 'Spiritual Growth'
        })}>
            <View style={styles.item}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemText}>
                        {props.habit}
                    </Text>
                    <TouchableOpacity onPress={() => dispatch(showModal('edit-habit'))}>
                        <View style={styles.iconWrapper}>
                            <FontAwesome name="pencil" size={18} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const HeaderTitle = (props) => {
    const dispatch = useDispatch();
    return (
    <View style={styles.headerArea}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={() => dispatch(showModal('add-habit'))}>
            <Text style={styles.seeAll}>Add Habit </Text>
        </TouchableOpacity>
    </View>
)
    }
const HabitItem = (props) => {
    return (
        <FlatList
            data={topRankedHabits}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item habit={item.habit} id={item.id} navigation={props.navigation}/>}
            ListHeaderComponent={<HeaderTitle title={props.title} 
            style={styles.container}
            />}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        // color: '#FF5A5F',
        // fontSize: 16,
        // fontWeight: '700',
        // marginBottom: 35,
        // fontFamily: "Montserrat_700Bold",
    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
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
        // fontSize: 14,
        // color: "#484848",
        // marginBottom: 15,
        // fontWeight: "700",
        // fontFamily: "Montserrat_700Bold",
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
        color: "#6C63FF",
        marginBottom: 15,
        fontFamily: 'Montserrat_400Regular',
        color: "#FF5A5F",
    }
})

export default HabitItem;