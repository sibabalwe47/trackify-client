import React from "react";
import { StyleSheet } from "react-native";
import { ART } from "@react-native-community/art";
import { scaleLinear } from "d3-scale";

import { Surface, Shape } from "@react-native-community/art";

const yAxis = ({ width, height }) => {
  return <Surface width={width} height={height}></Surface>;
};

export default yAxis;
