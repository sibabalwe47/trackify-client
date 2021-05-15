import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import Header from "../components/Header/Header";
import { habits } from "../helpers/data";
import { FontAwesome } from "@expo/vector-icons";

const TrackDetailsScreen = (props) => {
  const { dateString } = props.route.params;
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}>
        <Header
          title={dateString}
          subtitle="Track"
          navigation={props.navigation}
        />

        <View style={styles.habitsContainer}>
          <FlatList
            data={habits}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.habit}>
                <Text style={styles.title}>{item.category}</Text>
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={item.habits}
                  renderItem={({ item }) => (
                    <View style={styles.habitItem}>
                      <Text style={styles.habitItemTitle}>{item.title}</Text>
                      <TouchableOpacity
                        onPress={() => console.log("Checked habit")}
                      >
                        <View style={styles.iconWrapper}></View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            )}
          />
          <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
            <Text style={styles.buttonText}>Track</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  habitsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 60,
  },
  button: {
    backgroundColor: "#FF5A5F",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 40,
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    fontSize: 16,
  },
  title: {
    fontSize: 13,
    color: "#575A89",
    marginBottom: 15,
    fontFamily: "Montserrat_700Bold",
  },
  habitItem: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  habitItemTitle: {
    color: "#FF5A5F",
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
  },
  habit: {
    marginBottom: 20,
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#f5f5f5",
  },
});

export default TrackDetailsScreen;
