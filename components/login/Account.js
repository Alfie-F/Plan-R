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

  console.log(user.current);

  return (
    <SafeAreaView
      style={styles.container}
      backgroundColor={scheme === "dark" ? "black" : "white"}
      borderColor={scheme === "dark" ? "#2b4542" : "#5FD3C9"}
    >
      <Text style={[theme, styles.title]}>{user.current.name}</Text>
      <Text style={[theme, styles.title]}>{user.current.email}</Text>
      <View style={styles.wrapper}>
        <Button
          style={styles.button}
          icon="account-arrow-up"
          mode="contained"
          buttonColor="#5FD3C9"
          textColor="white"
          width="80%"
          alignSelf="center"
          onPress={() => console.log("calender")}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Update info
        </Button>
        <Button
          style={styles.button}
          icon="account-arrow-up"
          mode="contained"
          buttonColor="#e74a5f"
          textColor="white"
          width="80%"
          alignSelf="center"
          onPress={() => navigation.goBack()}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Delete Account
        </Button>
        <Button
          style={styles.button}
          icon="account-arrow-up"
          mode="contained"
          buttonColor="#5FD3C9"
          textColor="white"
          width="80%"
          alignSelf="center"
          onPress={() => navigation.goBack()}
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
        >
          Go Back
        </Button>
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
    height: "32%",
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
