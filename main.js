import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Client, Account, ID, Models } from "react-native-appwrite";
import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import TabNav from "./components/TabNavScreen";
import LogInPage from "./components/login/LogInModal";
import RegisterPage from "./components/login/RegisterModal";
import Auth from "./components/login/auth/Auth2";
import Auth2 from "./components/login/auth/Auth2";
import { createContext } from "react";
import { UserProvider } from "./contexts/UserContexts";

const UserContext = createContext();

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer backgroundColor="white">
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
              headerStyle: { backgroundColor: "white" },
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
            name="GoogleLogin"
            component={Auth2}
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
