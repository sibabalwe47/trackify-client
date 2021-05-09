import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header/Header";
import PieChart from "../components/Charts/PieChart";
import { useDispatch } from "react-redux";
import { showModal } from "../store/actions/modals/ModalActions";

const HabitDetailsScreen = (props) => {
  const dispatch = useDispatch();
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
        <PieChart />
      </View>
      <View style={styles.headerArea}>
        <Text style={styles.title}>Additional information</Text>
        <TouchableOpacity onPress={() => dispatch(showModal("edit-habit"))}>
          <Text style={styles.seeAll}>Edit Habit </Text>
        </TouchableOpacity>
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
    color: "#575A89",
    marginBottom: 30,
    fontFamily: "Montserrat_700Bold",
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
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  seeAll: {
    fontWeight: "400",
    fontSize: 12,
    color: "#6C63FF",
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    color: "#575A89",
    marginBottom: 15,
    fontFamily: "Montserrat_700Bold",
  },
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  seeAll: {
    fontWeight: "400",
    fontSize: 12,
    color: "#6C63FF",
    marginBottom: 15,
    fontFamily: "Montserrat_400Regular",
    color: "#FF5A5F",
  },
});

export default HabitDetailsScreen;
