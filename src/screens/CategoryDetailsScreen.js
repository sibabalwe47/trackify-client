import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, BackHandler } from "react-native";
import FloatingButton from "../components/Buttons/FloatingButton";
import BarGraph from "../components/Charts/BarGraph/BarGraph";
import HabitItems from "../components/Items/HabitItem";
import Header from "../components/Header/Header";

const CategoriesDetailsScreen = (props) => {
  const backAction = () => {
    if (props.route.name == "Dashboard") {
      return true;
    } else {
      props.navigation.goBack();
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    //console.log(props);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <Header
        navigation={props.navigation}
        title={props.route.params.title && props.route.params.title}
        subtitle={props.route.params.subtitle && props.route.params.subtitle}
      />
      <View style={styles.graphArea}>
        <BarGraph />
      </View>
      <View style={styles.items}>
        <HabitItems navigation={props.navigation} title="Habits" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f9ff",
    paddingBottom: 60,
  },
  header: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    width: "78%",
  },
  headerRight: {},
  profileImage: {
    width: 40,
    height: 40,
    backgroundColor: "#f5f5f5",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#6C63FF",
  },
  title: {
    fontWeight: "700",
    fontSize: 28,
  },
  subTitle: {
    fontSize: 16,
    color: "#6C63FF",
    width: "100%",
    marginTop: 10,
  },
  items: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  graphArea: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CategoriesDetailsScreen;

// import React from 'react'
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Header from '../components/Header/Header';
// import PieChart from '../components/Charts/PieChart';
// import FloatingButton from '../components/Buttons/FloatingButton';
// import ModalAddHabit from '../components/Modals/ModalAddHabit';
// import GlobalModal from '../components/Modal';
// import { FloatingAction } from 'react-native-floating-action'
// import { FontAwesome5 } from '@expo/vector-icons';
// import { showModal } from '../store/actions/modals/ModalActions'
// import { useDispatch } from 'react-redux'
// import TopRankedHabits from '../components/Items/HabitItem';
// import { topRankedHabits } from '../helpers/data'
// import CategoryItems from '../components/Items/CategoryItem';

// const CategoryDetailsScreen = (props) => {

//     const dispatch = useDispatch();

//     return (
//         <View style={styles.container}>
//             <ScrollView  contentContainerStyle={{paddingBottom: 60}}>
//                 <Header navigation={props.navigation} />
//                 <View style={styles.graphArea}>
//                     <PieChart />
//                 </View>
//                 <TouchableOpacity onPress={() => dispatch(showModal('create-habit'))} style={styles.button}>
//                     <View>
//                         <FontAwesome5 name="plus-circle" size={24} />
//                     </View>
//                 </TouchableOpacity>
//                 {/* <View style={styles.items}>
//                     <CategoryItems navigation={props.navigation}/>
//                 </View> */}
//                 <GlobalModal />
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f6f9ff',
//         paddingBottom: 60,
//         position: 'relative'
//     },
//     graphArea: {
//         padding: 20,
//         marginTop: -30
//     },
//     button: {
//         position: 'absolute',
//         right: 20,
//         bottom: 0,
//         width: 60,
//         height: 60,
//         borderRadius: 100,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 9999,
//         borderColor: '#f5f5f5',
//         borderWidth: 1
//     },
//     topRankedArea: {
//         paddingHorizontal: 20
//     }
// })

// export default CategoryDetailsScreen;
