import React from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { topRankedHabits } from '../../helpers/data';

const Item = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('HabitDetails', {
        title: 'Reading scripture',
        subtitle: 'Spiritual Growth'
    })}>
        <View style={styles.item}>
            <View>
                <Text style={styles.itemText}>
                    {props.habit}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

const HeaderTitle = (props) => (
    <Text style={styles.title}>{props.title}</Text>
)

const TopRankedItem = (props) => {
    return (
        <FlatList
            data={topRankedHabits}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item habit={item.habit} id={item.id} navigation={props.navigation}/>}
            ListHeaderComponent={<HeaderTitle title="Key performance areas" 
            style={styles.container}
            />}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        // fontSize: 14,
        color: "#575A89",
        marginBottom: 30,
        fontFamily: "Montserrat_700Bold",
    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
    },
    itemText: {
        color: '#FF5A5F',
        fontFamily: "Montserrat_500Medium",
        fontSize: 12
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default TopRankedItem;