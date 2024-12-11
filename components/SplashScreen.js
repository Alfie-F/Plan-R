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
import { UserProvider } from "../contexts/UserContexts";
// const windowWidth = Dimensions.get("screen").width;
// const windowHeight = Dimensions.get("screen").height;

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
          backgroundColor={"#cfe2f3"}
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
        backgroundColor={"#cfe2f3"}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        {isVisible ? (
          <View style={styles.hold}>
            <View>
              <Text style={styles.title}>Plan-R</Text>
              <Text style={styles.subtitle}>The Event Planning App</Text>
              <Text style={styles.subtitle}>
                {" "}
                Hello {user.current ? user.current.name : "anonymous user"}!
              </Text>
            </View>
            <Button
              style={styles.button}
              icon="account-arrow-up"
              mode="contained"
              buttonColor="white"
              textColor="black"
              onPress={() => navigation.navigate("Register")}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
            >
              Register
            </Button>
            <Button
              style={styles.button}
              icon="login-variant"
              mode="contained"
              buttonColor="white"
              textColor="black"
              onPress={() => navigation.navigate("LogIn")}
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
              onPress={() => toggleVisibility()}
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
              onPress={() => navigation.navigate("TabNav")}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
            >
              Browse As Guest
            </Button>
          </View>
        ) : null}
        {!isVisible ? (
          <View style={styles.hold}>
            <View>
              <Text style={styles.title}>Plan-R</Text>
              <Text style={styles.subtitle}>The Event Planning App</Text>
            </View>
            <Button
              style={styles.button}
              icon="login-variant"
              mode="contained"
              buttonColor="white"
              textColor="black"
              onPress={() => [toggleVisibility(), user.logout()]}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
            >
              Log out
            </Button>
            <Button
              style={styles.button2}
              icon="book-account"
              mode="contained"
              buttonColor="white"
              textColor="black"
              onPress={() => navigation.navigate("TabNav")}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
            >
              Go to events
            </Button>
          </View>
        ) : null}
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
    backgroundColor: "#cfe2f3",
    justifyContent: "center",
  },
  loadingContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    // backgroundColor: "#cfe2f3",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
    textAlign: "center",
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
  hold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "110%",
    resizeMode: "cover",
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
    marginBottom: "auto",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  modalStyle: {
    backgroundColor: "#cfe2f3",
    padding: 20,
    width: "auto",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    height: "auto",
  },
});
