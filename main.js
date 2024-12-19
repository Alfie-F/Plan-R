import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  useColorScheme,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Client, Account, ID, Models } from "react-native-appwrite";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import TabNav from "./components/TabNavScreen";
import LogInPage from "./components/login/LogInModal";
import RegisterPage from "./components/login/RegisterModal";
import { createContext } from "react";
import { UserProvider } from "./contexts/UserContexts";
import { Alert } from "react-native";
import { DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import EventModal from "./components/articles/EventModal";

const UserContext = createContext();

const Stack = createNativeStackNavigator();

export default function Main() {
  const scheme = useColorScheme();
  // NavigationBar.setVisibilityAsync("visible");
  // NavigationBar.setBackgroundColorAsync(scheme === "dark?" ? "black" : "white");
  // const { colors } = useTheme();
  // useEffect(() => {
  //   NavigationBar.setVisibilityAsync("visible");
  // }, []);
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{
              title: "Plan-R",
              headerLeft: () => <></>,
              headerTintColor: scheme === "light" ? "black" : "white",
              headerStyle: {
                backgroundColor: scheme === "dark" ? "black" : "white",
              },
              headerRight: () => (
                <Button
                  onPress={() => console.log("butoon")}
                  title={"account"}
                  color={"#5FD3C9"}
                ></Button>
              ),
            }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogInPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EVentModal"
            component={EventModal}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FD3C9",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
