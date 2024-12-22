import * as React from "react";
import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Alert,
  Platform,
} from "react-native";
import { Button, Modal } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";
import NoEscape from "../../Utils/NoExit";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import dateFormatter from "../../Utils/dateFormatter";
import * as Calendar from "expo-calendar";

export default function EventModal({ route }) {
  const user = useUser();
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(styles[scheme]);
  const eventNum = route.params.eventNum;
  const thisEvent = user.events[eventNum].$id;
  const [signedUp, setSignedUp] = useState();

  NoEscape(false);

  useEffect(() => {
    setTheme(styles[scheme]);
  });

  useEffect(() => {
    if (user.getEvents.includes(thisEvent)) {
      setSignedUp(true);
    } else {
      setSignedUp(false);
    }
  }, [user.getEvents]);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        const defaultCalendar =
          calendars.find((calendar) => calendar.isPrimary) || calendars[0];
        console.log(defaultCalendar, eventObj);
      }
    })();
  }, []);

  const eventObj = {
    title: user.events[eventNum].event_name,
    startDate: user.events[eventNum].date.slice(0, 23) + "Z",
    // endDate: user.events[eventNum].date,
    location: user.events[eventNum].location,
    notes: user.events[eventNum].more_details,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    // allDay: true,
  };

  console.log(user.events[eventNum].date + "Z");

  // async () => {
  //   const eventId = await Calendar.createEventAsync(
  //     defaultCalendar.id,
  //     eventObj
  //   );
  //   console.log("HHHHHHHHHHHHHHH", eventId);
  // };

  // const please = Calendar.createEventInCalendarAsync(eventObj);
  // try {
  //   Alert.alert(
  //     "Event Created",
  //     "The event was added to your calendar successfully!"
  //   );
  // } catch (error) {
  //   console.error(error);
  //   Alert.alert("Error", "An error occurred while creating the event.");
  // }

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
      {!signedUp ? (
        <View style={styles.wrapper}>
          <Button
            style={styles.button}
            icon="account-arrow-up"
            mode="contained"
            buttonColor="#5FD3C9"
            textColor="white"
            width="80%"
            alignSelf="center"
            onPressIn={() =>
              user.signUp([...user.getEvents, thisEvent], user.current.$id)
            }
            onPress={() => {
              user.getEventsSigned(user.current.$id);
            }}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          >
            Sign up
          </Button>
          <Button
            style={styles.button}
            icon="backburger"
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
      ) : (
        <View style={styles.wrapper}>
          <Button
            style={styles.button}
            icon="calendar-cursor"
            mode="contained"
            buttonColor="#5FD3C9"
            textColor="white"
            width="80%"
            alignSelf="center"
            onPress={() => Calendar.createEventInCalendarAsync(eventObj)}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          >
            Add to calender
          </Button>
          {/* <AddEventToCalendar eventObj={eventObj}></AddEventToCalendar> */}
          <Button
            style={styles.button}
            icon="backburger"
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
      )}
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
