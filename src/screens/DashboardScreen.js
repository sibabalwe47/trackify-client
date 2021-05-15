import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  ImageBackground,
  Image,
  BackHandler,
} from "react-native";
import Categories from "../components/Categories/Categories";
import PieChart from "../components/Charts/PieChart";
import PlaceHolder from "../components/Placeholder";
import { topRankedHabits } from "../helpers/data";
import TopRankedHabits from "../components/Items/TopRankedItem";
import { useSelector } from "react-redux";

const DashboardScreen = (props) => {
  const { firstName, avatar } = useSelector((state) => state.user.user);
  const { habits } = useSelector((state) => state.topranked);

  //console.log(useSelector((state) => state));

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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Hello, {firstName && firstName}!</Text>
          <Text style={styles.subTitle}>
            Welcome to Trackify. Have a look at your progress
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={{
              uri: `${avatar}`,
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.graphArea}>
        <PieChart />
      </View>
      <View style={styles.categories}>
        <Categories navigation={props.navigation} />
      </View>
      <View style={styles.topRankedArea}>
        {habits && habits.length == 0 && <PlaceHolder />}
        {habits && habits.length > 0 && (
          <TopRankedHabits navigation={props.navigation} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    width: "65%",
  },
  headerRight: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF5A5F",
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
    color: "#575A89",
  },
  subTitle: {
    fontSize: 16,
    color: "#FF5A5F",
    width: "100%",
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
  },
  /* Graph area */
  graphArea: {},
  categories: {
    width: "100%",
  },
  modal: {
    backgroundColor: "#000",
  },
});

export default DashboardScreen;
