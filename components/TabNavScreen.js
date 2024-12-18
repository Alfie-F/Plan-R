import * as React from "react";
import { StyleSheet, Alert, BackHandler, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";
import Events from "./TabNav/Events";
import MyEvents from "./TabNav/MyEvents";
import Calender from "./TabNav/Calender";
import Staff from "./TabNav/Staff";
import NoEscape from "../Utils/NoExit";
import { useUser } from "../contexts/UserContexts";
import { DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

export default function TabNav(navigation) {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const [nav, setNav] = useState("visible");
  NavigationBar.setVisibilityAsync("visible");
  NavigationBar.setBackgroundColorAsync(colors.background);
  NoEscape();

  useEffect(() => {
    setNav("visible");
    // don't delete this, it seems unnecessary but the android bottom nav bar disappears if you change the android theme without it !
  });

  const user = useUser();
  return !user.current.labels.includes("admin") ? (
    <Tab.Navigator
      theme={scheme === "dark" ? DarkTheme : DefaultTheme}
      screenOptions={{
        tabBarActiveTintColor: "#5FD3C9",
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tab.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            elevation: 1,
            height: "8%",
          },
        }}
      >
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            title: "Events",
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

            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5FD3C9",
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tab.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            elevation: 1,
            height: "8%",
          },
        }}
      >
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
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

            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
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
