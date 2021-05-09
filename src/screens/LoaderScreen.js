import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchUser } from "../store/actions/user/user";
import { fetchAllCategories } from "../store/actions/categories/categories";
import {
  fetchKeyPerformanceAreas,
  fetchMonthlyAverage,
} from "../store/actions/streaks/streaks";

const LoaderScreen = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        Promise.all([
          // Get user
          dispatch(fetchUser()),
          // Get categories
          dispatch(fetchAllCategories()),
          // Get monthly stat
          dispatch(fetchKeyPerformanceAreas()),
          // Key performance areas
          //dispatch(fetchMonthlyAverage()),
        ]).then((values) => {
          setTimeout(() => {
            props.navigation.navigate("Dashboard");
          }, 3000);
        });
      } else {
        setTimeout(() => {
          props.navigation.navigate("Login");
        }, 3000);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF5A5F" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoaderScreen;
