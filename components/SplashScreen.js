import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Button } from "react-native-paper";

// const windowWidth = Dimensions.get("screen").width;
// const windowHeight = Dimensions.get("screen").height;

const pic = require("../assets/plane.jpg");

export default function SplashScreen({ navigation }) {
  //   NavigationBar.setPositionAsync("absolute");
  NavigationBar.setBackgroundColorAsync("#ffffff00");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setVisibilityAsync("hidden");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={pic} style={styles.image}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        <Text style={styles.title}>Plan-R</Text>
        <Text style={styles.subtitle}>The Event Planning App</Text>
        <Button
          style={styles.button}
          icon="account-arrow-up"
          mode="contained"
          buttonColor="white"
          textColor="black"
          onPress={() => console.log("Pressed")}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Sign-up
        </Button>
        <Button
          style={styles.button}
          icon="login-variant"
          mode="contained"
          buttonColor="white"
          textColor="black"
          onPress={() => console.log("Pressed")}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Log In
        </Button>
        <Button
          style={styles.button}
          icon="plus-circle-outline"
          mode="contained"
          buttonColor="white"
          textColor="black"
          onPress={() => console.log("Pressed")}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Log In With Google
        </Button>
        <Button
          style={styles.button2}
          icon="book-account"
          mode="contained"
          buttonColor="white"
          textColor="black"
          onPress={() => console.log("Pressed")}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Browse As Guest
        </Button>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // width: windowWidth,
    flex: 1,
    backgroundColor: "#edab7d",
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    lineHeight: 110,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: "40%",
    fontFamily: "serif",
  },
  subtitle: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "medium",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "serif",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "110%",
    resizeMode: "cover",
    marginTop: -40,
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  button2: {
    marginTop: "5%",
    marginBottom: 200,
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
});
