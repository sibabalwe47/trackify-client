import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoaderScreen = (props) => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setTimeout(() => {
          props.navigation.navigate("Dashboard");
        }, 5000);
      } else {
        setTimeout(() => {
          props.navigation.navigate("Login");
        }, 5000);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });

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
