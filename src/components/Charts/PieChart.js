import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { d3 } from "d3";
import { useSelector } from "react-redux";

const PieChart = () => {
  //const {} = useSelector((state) => state.streaks);

  return (
    <View style={styles.container}>
      <Text style={styles.month}>April</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 256,
    marginTop: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  month: {
    fontFamily: "Montserrat_700Bold",
    color: "#575A89",
  },
});

export default PieChart;
