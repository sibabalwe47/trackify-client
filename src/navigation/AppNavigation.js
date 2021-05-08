import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import TabBarIcon from "./TabBarIcon";

/*
 *  Init navigation options
 */
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

/*
 *  App screens
 */

import DashboardScreen from "../screens/DashboardScreen";
import TrackScreen from "../screens/TrackScreen";
import TrackDetailsScreen from "../screens/TrackDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryDetailsScreen from "../screens/CategoryDetailsScreen";
import HabitDetailsScreen from "../screens/HabitDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoaderScreen from "../screens/LoaderScreen";
/*
 * Navigation types
 */

const options = {
  headerShown: false,
};

/*
 * Navigation types
 */

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={options}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={options}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryDetailsScreen}
        options={options}
      />
      <Stack.Screen
        name="HabitDetails"
        component={HabitDetailsScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const TrackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackScreen"
        component={TrackScreen}
        options={options}
      />
      <Stack.Screen
        name="TrackDetails"
        component={TrackDetailsScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const MeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "chart-bar";
            return (
              <FontAwesome5
                name={iconName}
                size={20}
                color={focused ? "#FF5A5F" : "#575A89"}
              />
            );
          }

          if (route.name === "Track") {
            iconName = "calendar-check";
            return (
              <FontAwesome5
                name={iconName}
                size={20}
                color={focused ? "#FF5A5F" : "#575A89"}
              />
            );
          }

          if (route.name === "Me") {
            iconName = "user-circle";
            return (
              <FontAwesome5
                name={iconName}
                size={20}
                color={focused ? "#FF5A5F" : "#575A89"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#6C63FF",
        inactiveTintColor: "#484848",
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={DashboardNavigator} />
      <Tabs.Screen name="Track" component={TrackNavigator} />
      <Tabs.Screen name="Me" component={MeNavigator} />
    </Tabs.Navigator>
  );
};

/*
 * App Navigator (Tab Navigation)
 */

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loader"
          component={LoaderScreen}
          options={options}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={options} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={options}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabNavigator}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
