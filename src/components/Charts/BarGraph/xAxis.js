import React from "react";
import { Text } from "react-native";
import { ART } from "@react-native-community/art";

import { ScaleBand } from "d3-scale";
import moment from "moment";

import { Surface, Shape, Group } from "@react-native-community/art";

const xAxis = ({ width, height }) => {
  let axisValues = () => {
    let days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    let nums = ["11", "12", "13", "14", "15", "16", "17"];
    Array(7)
      .fill()
      .forEach((i, index) => {
        days.push(moment().subtract(index, "days").format("ddd"));
        nums.push(moment().subtract(index, "days").format("D"));
      });
    return { days: days.reverse(), nums: nums.reverse() };
  };
  const graphValues = axisValues();
  return (
    <Surface width={width} height={height}>
      <Group x={70}>
        {graphValues.days.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            y={0}
            font={`12px Arial`}
            alignment="center"
            opacity={index === 6 ? 1 : 0.6}
          >
            {item}
          </Text>
        ))}

        {graphValues.nums.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            y={15}
            font={`12px Arial`}
            alignment="center"
            opacity={index === 6 ? 1 : 0.6}
          >
            {item}
          </Text>
        ))}
      </Group>
    </Surface>
  );
};

export default xAxis;
