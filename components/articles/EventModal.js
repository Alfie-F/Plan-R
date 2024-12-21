import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";
import { Button, Modal } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";
import NoEscape from "../../Utils/NoExit";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import dateFormatter from "../../Utils/dateFormatter";

export default function EventModal({ route }) {
  const user = useUser();
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(styles[scheme]);
  const eventNum = route.params.eventNum;
  // console.log(route.params.eventNum);
  // console.log(user.events[eventNum]);
  console.log(route.params);
  NoEscape(false);

  useEffect(() => {
    setTheme(styles[scheme]);
  });

  return (
    <SafeAreaView
      style={styles.container}
      backgroundColor={scheme === "dark" ? "black" : "white"}
      borderColor={scheme === "dark" ? "#2b4542" : "#5FD3C9"}
    >
      <Text style={[theme, styles.title]}>
        {user.events[eventNum].event_name}{" "}
      </Text>
      <Text style={[theme, styles.body]}>
        {user.events[eventNum].more_details}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={[theme, styles.subtitle, { textAlign: "left" }]}>
          {user.events[eventNum].location}
        </Text>
        <Text style={[theme, styles.subtitle, { textAlign: "right" }]}>
          {dateFormatter(user.events[eventNum].date)}
        </Text>
      </View>
      <Button
        style={styles.button}
        icon="account-arrow-up"
        mode="contained"
        buttonColor="#5FD3C9"
        textColor="white"
        width="80%"
        alignSelf="center"
        onPress={() => console.log("slow down ")}
        labelStyle={{ fontSize: 25, lineHeight: 30 }}
      >
        Register
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-evenly",
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
  light: {
    fontFamily: "monospace",
    fontSize: 30,
    lineHeight: 31,
    // fontWeight: "thin",
    letterSpacing: 0.25,
    color: "#282828",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  title: {
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "left",
    marginBottom: 2,
    fontSize: 40,
    lineHeight: 42,
  },
  body: { fontSize: 20, lineHeight: 22, textAlign: "left", marginBottom: 5 },
  subtitle: {
    fontWeight: "thin",
    fontSize: 22,
    lineHeight: 28,
    width: "50%",
    maxWidth: "50%",
  },
});
