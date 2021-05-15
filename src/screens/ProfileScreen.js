import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";

const ProfileScreen = () => {
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
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
