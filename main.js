import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import TabNav from "./components/TabNavScreen";
import LogInPage from "./components/login/LogInModal";
import RegisterPage from "./components/login/RegisterModal";
import { createContext } from "react";
import { useUser } from "./contexts/UserContexts";
import {
  DefaultTheme,
  DarkTheme,
  useTheme,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import EventModal from "./components/articles/EventModal";
import { Button } from "react-native-paper";
import AccountPage from "./components/login/Account";

const UserContext = createContext();

const Stack = createNativeStackNavigator();

export default function Main() {
  const scheme = useColorScheme();
  const user = useUser();
  // const navigation = useNavigation();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
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
          options={({ navigation }) => ({
            headerTitle: "Plan-R",
            headerTitleAlign: "center",
            headerBackVisible: false,
            // headerLeft: () => <></>,
            headerTintColor: scheme === "light" ? "black" : "white",
            headerStyle: {
              backgroundColor: scheme === "dark" ? "black" : "white",
            },
            headerRight: () => (
              <TouchableOpacity
                onPressIn={() => navigation.navigate("Account")}
              >
                <Button
                  style={styles.button}
                  // icon="login-variant"
                  mode="contained"
                  buttonColor="#5FD3C9"
                  textColor="white"
                  labelStyle={{ fontSize: 15, lineHeight: 15 }}
                >
                  Account
                </Button>
              </TouchableOpacity>
            ),
          })}
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
          name="Account"
          component={AccountPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EventModal"
          component={EventModal}
          options={({ navigation }) => ({
            title: "Plan-R",
            headerLeft: () => <></>,
            headerTintColor: scheme === "light" ? "black" : "white",
            headerStyle: {
              backgroundColor: scheme === "dark" ? "black" : "white",
            },
            headerRight: () => (
              <TouchableOpacity
                onPressIn={() => navigation.navigate("Account")}
              >
                <Button
                  style={styles.button}
                  // icon="login-variant"
                  mode="contained"
                  buttonColor="#5FD3C9"
                  textColor="white"
                  labelStyle={{ fontSize: 15, lineHeight: 15 }}
                >
                  Account
                </Button>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
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
  button: {
    marginVertical: 5,
    width: 110,
    height: 40,
    justifyContent: "center",
  },
});
