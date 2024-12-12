import * as React from "react";
import { StyleSheet, Alert, BackHandler } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";
import Events from "./TabNav/Events";
import MyEvents from "./TabNav/MyEvents";
import Calender from "./TabNav/Calender";
import Staff from "./TabNav/Staff";
import NoEscape from "../Utils/NoExit";
import { useUser } from "../contexts/UserContexts";

const Tab = createBottomTabNavigator();

export default function TabNav(navigation) {
  NoEscape();
  NavigationBar.setVisibilityAsync("visible");
  NavigationBar.setBackgroundColorAsync("black");
  const user = useUser();
  return user.current ? (
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
            backgroundColor: "#5FD3C9",
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
            backgroundColor: "#5FD3C9",
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
            backgroundColor: "#5FD3C9",
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
  ) : (
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
            backgroundColor: "#5FD3C9",
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
            backgroundColor: "#5FD3C9",
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
            backgroundColor: "#5FD3C9",
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
        name="Staff"
        component={Staff}
        options={{
          title: "Staff",
          headerStyle: {
            backgroundColor: "#5FD3C9",
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
