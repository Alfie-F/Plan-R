import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Modal } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";
import NoEscape from "../../Utils/NoExit";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function EventModal({ route }) {
  const user = useUser();
  const eventNum = route.params.eventNum;
  console.log(route.params.eventNum);
  console.log(user.events[eventNum]);
  NoEscape(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dark}>
        <Text style={styles.header}> Sign Up for event?</Text>
        <Button></Button>
      </View>
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  dark: {
    fontFamily: "monospace",
    fontSize: 30,
    lineHeight: 31,
    // fontWeight: "thin",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
});
