import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatBar from "../HeaderComp";
import { useUser } from "../../contexts/UserContexts";
import Loading from "../Loading";
import { useTheme } from "@react-navigation/native";

export default function Events(navigation, route) {
  const { colors } = useTheme();
  const user = useUser();

  useEffect(() => {
    // console.log(user.events[0].Event_Name);
  }, []);

  if (user.isLoading) {
    return <Loading></Loading>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        hidden={false}
      ></StatusBar>
      <Text style={styles.text}>
        {user
          ? user.events[0].Event_Name
          : "make this work for a non used in user <3"}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#5FD3C9",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  text: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
});
