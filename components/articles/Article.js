import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import dateFormatter from "../../Utils/dateFormatter";

export default function Article({
  scheme,
  theme,
  eventNum,
  user,
  navigation,
  route,
  subbed,
}) {
  return (
    <View
      style={styles.article}
      backgroundColor={scheme === "dark" ? "black" : "white"}
      borderColor={scheme === "dark" ? "#2b4542" : "#5FD3C9"}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EventModal", {
            eventNum,
            subbed,
          })
        }
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "left",
    marginBottom: 2,
    fontSize: 24,
    lineHeight: 25,
  },
  body: { fontSize: 15, lineHeight: 16, textAlign: "left", marginBottom: 5 },
  subtitle: {
    fontWeight: "thin",
    fontSize: 15,
    lineHeight: 16,
    width: "50%",
    maxWidth: "50%",
  },
});
