
import React from 'react'
import { View, Text, StyleSheet, ScrollView, Modal, ImageBackground, Image } from 'react-native';
import Categories from '../components/Categories/Categories';
import PieChart from '../components/Charts/PieChart';
import PlaceHolder from '../components/Placeholder';
import { topRankedHabits } from '../helpers/data'
import TopRankedHabits from '../components/Items/TopRankedItem';

const DashboardScreen = (props) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 60}}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>Hello, Siba!</Text>
                    <Text style={styles.subTitle}>Welcome to Trackify. Have a look at your progress</Text>
                </View>
                <View style={styles.headerRight}>
                    <Image source={require('../../assets/user.jpg')} style={styles.profileImage}/>
                </View>
            </View>
            <View style={styles.graphArea}>
                <PieChart /> 
            </View>
            <View style={styles.categories}>
                <Categories navigation={props.navigation} />
            </View>
            <View style={styles.topRankedArea}>
                {topRankedHabits && topRankedHabits.length == 0 && (
                    <PlaceHolder />
                )}
                {topRankedHabits && topRankedHabits.length > 0 && (
                    <TopRankedHabits navigation={props.navigation} />
                )}
                
            </View>

           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f9ff',
        paddingBottom: 60
    },
    header: {
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        width: '65%'
    },
    headerRight: {},
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FF5A5F'
    },
    title:{
        fontSize: 28,
        fontFamily: "Montserrat_700Bold",
        color: "#575A89"
    },
    subTitle: {
        fontSize: 16,
        color: '#FF5A5F',
        width: '100%',
        marginTop: 10,
        fontFamily: 'Montserrat_400Regular'
    },
    /* Graph area */
    graphArea: {},
    categories: {
        width: '100%'
    },
    modal: {
        backgroundColor: '#000'
    }    
});

export default DashboardScreen;