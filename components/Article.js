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
      backgroundColor={scheme === "dark" ? "black" : "white"}
      borderColor={scheme === "dark" ? "#2b4542" : "#5FD3C9"}
    >
      <Text
        style={[theme, styles.title]}
        position={"absolute"}
        top={10}
        align={"left"}
      >
        {user.events[2].event_name}{" "}
      </Text>
      {/* <Text style={theme}>{user.events[2].more_details}</Text> */}
      <Text style={theme} position={"absolute"} bottom={30} right={0}>
        {user.events[2].location}
      </Text>
      <Text
        style={theme}
        position={"absolute"}
        bottom={0}
        right={0}
        fontWeight={"regular"}
      >
        {dateFormatter(user.events[2].date)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  text: {
    fontSize: 30,
    lineHeight: 31,
    fontWeight: "thin",
    letterSpacing: 0.25,
    color: "white",
    // textAlign: "center",
    paddingHorizontal: "5%",
  },
  article: {
    paddingVertical: 50,
    // borderRadius: "2%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // marginBottom: 2,
    // textAlign: "left",
  },
  title: { fontWeight: "bold" },
  subtitle: { fontWeight: "thin" },
});
