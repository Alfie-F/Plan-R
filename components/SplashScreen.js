import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-paper";
import { useUser } from "../contexts/UserContexts";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const pic = require("../assets/plane.jpg");

export default function SplashScreen({ navigation }) {
  const user = useUser();
  //   NavigationBar.setPositionAsync("absolute");
  NavigationBar.setBackgroundColorAsync("#ffffff00");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setVisibilityAsync("hidden");

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    setIsVisible(user.current ? false : true);
  }, [user]);

  if (user.isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ImageBackground
          source={pic}
          style={styles.image}
          backgroundColor={"#5FD3C9"}
        >
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            hidden={true}
          ></StatusBar>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={100} color={"#FFFFFF"}></ActivityIndicator>
            <Text style={styles.subtitle}> Loading...</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={pic}
        style={styles.image}
        backgroundColor={"#5FD3C9"}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        {isVisible ? (
          <LinearGradient
            style={styles.hold}
            colors={["#5FD3C9", "transparent"]}
          >
            <View>
              <Text style={styles.title}>Plan-R</Text>
              <Text style={styles.subtitle}>The Event Planning App</Text>
              <Text style={styles.subtitle}>
                {" "}
                Hello {user.current ? user.current.name : "anonymous user"}!
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.wrapper}></View>
              <Button
                style={styles.button}
                icon="account-arrow-up"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => navigation.navigate("Register")}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Register
              </Button>
              <Button
                style={styles.button}
                icon="login-variant"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => navigation.navigate("LogIn")}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Log In
              </Button>
              <Button
                style={styles.button}
                icon="plus-circle-outline"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => navigation.navigate("GoogleLogin")}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Log In With Google
              </Button>
              <Button
                style={styles.button}
                icon="book-account"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => navigation.navigate("TabNav")}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Browse As Guest
              </Button>
            </View>
          </LinearGradient>
        ) : null}
        {!isVisible ? (
          <LinearGradient
            style={styles.hold}
            colors={["#5FD3C9", "transparent"]}
          >
            <View>
              <Text style={styles.title}>Plan-R</Text>
              <Text style={styles.subtitle}>The Event Planning App</Text>
              <Text style={styles.subtitle}>
                {" "}
                Hello {user.current ? user.current.name : "anonymous user"}!
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                icon="login-variant"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => [toggleVisibility(), user.logout()]}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Log out
              </Button>
              <Button
                style={styles.button}
                icon="book-account"
                mode="contained"
                buttonColor="#5FD3C9"
                textColor="white"
                onPress={() => navigation.navigate("TabNav")}
                labelStyle={{ fontSize: 25, lineHeight: 30 }}
              >
                Go to events
              </Button>
            </View>
          </LinearGradient>
        ) : null}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    // width: windowWidth,
    flex: 1,
    backgroundColor: "#5FD3C9",
    justifyContent: "center",
  },
  loadingContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    // backgroundColor: "#5FD3C9",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 85,
    lineHeight: 110,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: "10%",
    fontFamily: "monospace",
  },
  subtitle: {
    fontSize: 23,
    lineHeight: 50,
    fontWeight: "medium",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "monospace",
    textAlign: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: -40,
  },
  hold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 40,
    marginTop: windowHeight / 10,
  },
  button: {
    marginVertical: 10,
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "column",
    paddingVertical: "10%",
  },
});
