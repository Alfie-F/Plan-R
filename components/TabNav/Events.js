import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  useColorScheme,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../contexts/UserContexts";
import Loading from "../Loading";
import { useTheme } from "@react-navigation/native";
import Article from "../articles/Article";

export default function Events({ navigation, route }) {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const user = useUser();
  const [theme, setTheme] = useState(styles[scheme]);

  useEffect(() => {
    setTheme(styles[scheme]);
  }, [scheme]);

  useEffect(() => {
    user.getEventsSigned(user.current.$id);
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
      <ScrollView>
        {user.events.map((article, i) => {
          return (
            <Article
              scheme={scheme}
              theme={theme}
              eventNum={i}
              user={user}
              key={user.events[i].$id}
              navigation={navigation}
              route={route}
              subbed={false}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  article: {
    paddingVertical: 50,
    borderRadius: "2%",
    borderWidth: 2,
  },
  dark: {
    fontFamily: "monospace",
    fontSize: 30,
    lineHeight: 31,
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  light: {
    fontFamily: "monospace",
    fontSize: 30,
    lineHeight: 31,
    letterSpacing: 0.25,
    color: "#282828",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
});
