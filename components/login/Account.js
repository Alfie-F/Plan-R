import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";
import { Button, Modal } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";
import NoEscape from "../../Utils/NoExit";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import dateFormatter from "../../Utils/dateFormatter";

export default function AccountPage({ route }) {
  const user = useUser();
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(styles[scheme]);
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
      <Text style={[theme, styles.title]}>test</Text>
      <Text style={[theme, styles.body]}>test</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={[theme, styles.subtitle, { textAlign: "left" }]}>
          test
        </Text>
        <Text style={[theme, styles.subtitle, { textAlign: "right" }]}>
          test
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    // backgroundColor: "black",
    justifyContent: "space-evenly",
  },
  wrapper: {
    // flexDirection: "column",
    justifyContent: "space-evenly",
    height: "25%",
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
