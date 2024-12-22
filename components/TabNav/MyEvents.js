import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  useColorScheme,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatBar from "../HeaderComp";
import { useUser } from "../../contexts/UserContexts";
import Loading from "../Loading";
import { useTheme } from "@react-navigation/native";
import dateFormatter from "../../Utils/dateFormatter";
import Article from "../articles/Article";
import EventModal from "../articles/EventModal";
import { Button } from "react-native-paper";

export default function Events({ navigation, route }) {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const user = useUser();
  const [theme, setTheme] = useState(styles[scheme]);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    setTheme(styles[scheme]);
  });

  useEffect(() => {
    console.log(user.current.$id, user.getEvents);
  }, []);
  // useEffect(() => {
  //   setEmpty( > 0 ? false : true);
  // }, []);

  if (user.isLoading) {
    return <Loading tabnav={true}></Loading>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        hidden={false}
      ></StatusBar>
      {/* {!empty ? ( */}
      <ScrollView>
        {user.events.map((article, i) => {
          if (user.getEvents.includes(user.events[i].$id)) {
            return (
              <Article
                scheme={scheme}
                theme={theme}
                eventNum={i}
                user={user}
                key={user.events[i].$id}
                navigation={navigation}
                route={route}
                subbed={true}
              />
            );
          }
        })}
      </ScrollView>
      {/* ) : (
        <>
          <Text style={[theme, styles.title]}>
            No events? have a look on the events page to sign up!
          </Text>
          <Button
            style={styles.button}
            icon="account-arrow-up"
            mode="contained"
            buttonColor="#5FD3C9"
            textColor="white"
            width="80%"
            alignSelf="center"
            onPress={() => user.getEventsSigned(user.current.$id)}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          ></Button>
        </>
      )} */}
    </SafeAreaView>
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
  // text: {
  //   fontSize: 30,
  //   lineHeight: 31,
  //   fontWeight: "bold",
  //   letterSpacing: 0.25,
  //   color: "white",
  //   textAlign: "center",
  //   paddingHorizontal: "5%",
  // },
  article: {
    paddingVertical: 50,
    borderRadius: "2%",
    borderWidth: 2,
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
});
