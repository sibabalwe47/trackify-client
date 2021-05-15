import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

// Graph files
import YAxis from "./yAxis";
import XAxis from "./xAxis";
import Columns from "./Columns";

const BarGraph = () => {
  let width = Dimensions.get("screen").width;
  let xAxisHeight = 30;
  return (
    <View style={styles.container}>
      <Text style={styles.month}>April</Text>
      <YAxis />

      <Columns />

      <XAxis width={width - 10} height={xAxisHeight} />
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

export default BarGraph;
