import * as React from "react";
import { StyleSheet, Alert, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Events from "./TabNav/Events";
import MyEvents from "./TabNav/MyEvents";
import Calender from "./TabNav/Calender";
import NoEscape from "../Utils/NoExit";

const Tab = createBottomTabNavigator();

export default function TabNav(navigation) {
  NoEscape();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#A8E6CE",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          title: "Events",
          headerStyle: {
            backgroundColor: "#cfe2f3",
            elevation: 0,
          },
          //   headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000",
            elevation: 1,
            height: "8%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyEvents"
        component={MyEvents}
        options={{
          title: "MyEvents",
          headerStyle: {
            backgroundColor: "#cfe2f3",
            elevation: 0,
          },
          //   headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000",
            elevation: 1,
            height: "8%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cards-spade"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          title: "Calender",
          headerStyle: {
            backgroundColor: "#cfe2f3",
            elevation: 0,
          },
          //   headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000",
            elevation: 1,
            height: "8%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
    borderColor: "#edab7d",
  },
});
