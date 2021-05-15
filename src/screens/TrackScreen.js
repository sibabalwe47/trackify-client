import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, BackHandler } from "react-native";
import FloatingButton from "../components/Buttons/FloatingButton";
import PieChart from "../components/Charts/PieChart";
import CategoryItems from "../components/Items/CategoryItem";
import TrackingCalendar from "../components/Calendar";

const TrackScreen = (props) => {
  const backAction = () => {
    if (props.route.name == "Dashboard") {
      return true;
    } else {
      props.navigation.goBack();
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    console.log(props);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <View
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Let's get you tracking your habits!</Text>
        </View>
      </View>
      <View style={styles.graphArea}>
        <PieChart />
      </View>
      <View style={styles.calendarArea}>
        <TrackingCalendar navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f9ff",
  },
  header: {
    marginTop: 60,
    marginBottom: -30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  headerLeft: {
    width: "93%",
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
    color: "#575A89",
  },
  subTitle: {
    fontSize: 16,
    color: "#6C63FF",
    width: "100%",
    marginTop: 10,
  },
  items: {
    marginTop: 50,
  },
  calendarArea: {
    marginTop: 20,
  },
});

export default TrackScreen;
