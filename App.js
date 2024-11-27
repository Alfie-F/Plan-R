import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./components/SplashScreen";
import TabNav from "./components/TabNavScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
