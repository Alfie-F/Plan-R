import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  StatusBar,
  useColorScheme,
} from "react-native";
import dateFormatter from "../Utils/dateFormatter";
import { useUser } from "../contexts/UserContexts";

export default function Article({ scheme, theme }) {
  const user = useUser();

  return (
    <View
      style={styles.article}
      backgroundColor={scheme === "dark" ? "#282828" : "white"}
      borderColor={scheme === "dark" ? "white" : "#282828"}
    >
      <Text style={theme}>{user.events[2].event_name} </Text>
      <Text style={theme}>{user.events[2].location}</Text>
      <Text style={theme}>{user.events[2].more_details}</Text>
      <Text style={theme}>{dateFormatter(user.events[2].date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  text: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  article: {
    paddingVertical: 50,
    borderRadius: "2%",
    borderWidth: 2,
  },
  dark: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  light: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#282828",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
});
