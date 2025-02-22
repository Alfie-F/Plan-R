import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  useColorScheme,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../contexts/UserContexts";
import Loading from "../Loading";
import { useTheme } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import registerCheckerEvent from "../../Utils/registerCheckCreateEvent";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function Staff({ navigation, route }) {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const user = useUser();
  const [theme, setTheme] = useState(styles[scheme]);
  const [event, setEvent] = useState();
  const [location, setLocation] = useState();
  const [moreDetails, setMoreDetails] = useState();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [register, setRegister] = useState([null, null, null, null]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    setTheme(styles[scheme]);
  });

  if (user.isLoading) {
    return <Loading></Loading>;
  }
  return (
    <SafeAreaView
      style={styles.container}
      backgroundColor={scheme === "dark" ? "black" : "white"}
      borderColor={scheme === "dark" ? "#2b4542" : "#5FD3C9"}
    >
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        hidden={false}
      ></StatusBar>
      <View style={styles.buttonContainer}>
        <Text style={[theme, styles.title]}>Create a new event</Text>
        <TextInput
          value={event}
          mode="outlined"
          multiline={false}
          placeholder="enter event name"
          color="black"
          textAlign="default"
          style={{ width: "80%", maxHeight: 60, textAlign: "center" }}
          onChangeText={setEvent}
          theme={{ roundness: 20 }}
        ></TextInput>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 2,
            color: theme.color,
            fontWeight: "bold",
          }}
        >
          {" "}
          {register[2]}{" "}
        </Text>
        <TextInput
          value={location}
          mode="outlined"
          multiline={false}
          placeholder="enter location"
          color="black"
          textAlign="default"
          style={{ width: "80%", maxHeight: 60, textAlign: "center" }}
          onChangeText={setLocation}
          theme={{ roundness: 20 }}
        ></TextInput>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 2,
            color: theme.color,
            fontWeight: "bold",
          }}
        >
          {" "}
          {register[0]}{" "}
        </Text>
        <TextInput
          value={moreDetails}
          mode="outlined"
          multiline={true}
          placeholder="give some more info about the event"
          textAlign="default"
          style={{
            width: "80%",
            height: 120,
            textAlign: "center",
          }}
          onChangeText={setMoreDetails}
          theme={{ roundness: 20 }}
        ></TextInput>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 2,
            color: theme.color,
            fontWeight: "bold",
          }}
        >
          {" "}
          {register[1]}{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Button
            onPress={showDatepicker}
            title="Show date picker!"
            style={styles.button}
            icon="calendar-check"
            mode="contained"
            buttonColor="#CBD3C4"
            textColor="white"
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          >
            <Text>Date</Text>
          </Button>
          <Button
            onPress={showTimepicker}
            title="Time"
            style={styles.button}
            icon="clock-time-eight-outline"
            mode="contained"
            buttonColor="#CBD3C4"
            textColor="white"
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          >
            <Text>Time</Text>
          </Button>
        </View>
        <Text style={[theme, styles.body]} marginTop={10}>
          selected: {date.toLocaleString()}
        </Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Text
          style={{
            textAlign: "center",
            paddingTop: 2,
            paddingBottom: 15,
            color: theme.color,
            fontWeight: "bold",
          }}
        >
          {" "}
          {register[3]}{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: "15%",
          }}
        >
          <Button
            style={styles.button}
            icon="creation"
            mode="contained"
            buttonColor="#5FD3C9"
            textColor="white"
            marginBottom={"5%"}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
            onPressIn={() =>
              setRegister(
                registerCheckerEvent(location, moreDetails, event, date)
              )
            }
            onPress={() => {
              if (
                JSON.stringify(register) ==
                JSON.stringify([true, true, true, true])
              ) {
                [user.createEvent(location, moreDetails, event, date)];
                user.result();
              }
            }}
          >
            <Text>Create</Text>
          </Button>
          <Button
            style={styles.button}
            icon="thumb-down"
            mode="contained"
            buttonColor="#e74a5f"
            textColor="white"
            marginBottom={"5%"}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
            onPress={() => [setEvent(""), setLocation(""), setMoreDetails("")]}
          >
            <Text>Clear</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-evenly",
    minHeight: windowHeight - 160,
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
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    fontSize: 24,
    lineHeight: 25,
    marginTop: 40,
  },
  body: { fontSize: 15, lineHeight: 16, textAlign: "center", marginBottom: 5 },
  subtitle: {
    fontWeight: "thin",
    fontSize: 15,
    lineHeight: 16,
    width: "50%",
    maxWidth: "50%",
  },
  button: {
    marginTop: "1%",

    width: "40%",
    marginHorizontal: 10,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginBottom: 40,
    marginTop: 40,
  },
});
