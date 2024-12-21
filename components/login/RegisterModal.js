import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Button, Modal, TextInput, Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../contexts/UserContexts";
import registerChecker from "../../Utils/registerCheck";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("screen").height;
const pic = require("../../assets/lighthouse.jpg");

export default function RegisterPage({ registerPopUp, setRegisterPopUp }) {
  const user = useUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [register, setRegister] = useState([null, null, null, null]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={pic}
        style={styles.image}
        backgroundColor={"#5FD3C9"}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        <LinearGradient
          style={styles.hold}
          colors={["#5FD3C9", "transparent"]}
          locations={[0.5, 0.99]}
        >
          <View marginBottom={10}>
            <Text style={styles.title}>Plan-R</Text>
            <Text style={styles.subtitle}>The Event Planning App</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              value={name}
              mode="outlined"
              multiline={false}
              placeholder="enter name"
              textAlign="default"
              style={{ width: "80%", maxHeight: 60, textAlign: "center" }}
              onChangeText={setName}
              theme={{ roundness: 20 }}
            ></TextInput>
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 2,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              {register[2]}{" "}
            </Text>
            <TextInput
              value={email}
              mode="outlined"
              multiline={false}
              placeholder="enter email"
              textAlign="default"
              style={{ width: "80%", maxHeight: 60, textAlign: "center" }}
              onChangeText={setEmail}
              theme={{ roundness: 20 }}
            ></TextInput>
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 2,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              {register[0]}{" "}
            </Text>
            <TextInput
              value={password}
              mode="outlined"
              multiline={false}
              placeholder="enter password"
              secureTextEntry={true}
              textAlign="default"
              style={{ width: "80%", maxHeight: 60, textAlign: "center" }}
              onChangeText={setPassword}
              theme={{ roundness: 20 }}
            ></TextInput>
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 2,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              {register[1]}{" "}
            </Text>
            <TextInput
              value={password2}
              mode="outlined"
              multiline={false}
              placeholder="re-enter password"
              secureTextEntry={true}
              textAlign="default"
              style={{
                width: "80%",
                maxHeight: 60,
                textAlign: "center",
              }}
              onChangeText={setPassword2}
              theme={{ roundness: 20 }}
            ></TextInput>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 2,
                paddingBottom: 15,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              {register[3]}{" "}
            </Text>
            <Button
              style={styles.button}
              icon="login-variant"
              mode="contained"
              buttonColor="#5FD3C9"
              textColor="white"
              marginBottom={"5%"}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
              onPressIn={() =>
                setRegister(registerChecker(email, password, name, password2))
              }
              onPress={() => {
                if (
                  JSON.stringify(register) ==
                  JSON.stringify([true, true, true, true])
                ) {
                  user.register(email, password, name);
                }
              }}
            >
              <Text>Register </Text>
            </Button>
            <Button
              style={styles.button}
              icon="login-variant"
              mode="contained"
              buttonColor="#5FD3C9"
              textColor="white"
              marginBottom={"5%"}
              labelStyle={{ fontSize: 25, lineHeight: 30 }}
              onPress={() => navigation.goBack()}
            >
              <Divider />
              <Text>Go Back</Text>
            </Button>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginBottom: 40,
    marginTop: windowHeight / 10,
  },
  container: {
    height: "100%",
    width: "100%",
    // width: windowWidth,
    flex: 1,
    backgroundColor: "#edab7d",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: windowHeight + 20,
    resizeMode: "cover",
    marginTop: -40,
  },
  hold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "110%",
    resizeMode: "cover",
    marginBottom: "20%",
  },
  title: {
    fontSize: 85,
    lineHeight: 110,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: "10%",
    fontFamily: "monospace",
  },
  subtitle: {
    fontSize: 23,
    lineHeight: 50,
    fontWeight: "medium",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "monospace",
    textAlign: "center",
  },
  button: {
    marginTop: "1%",
    marginBottom: "5%",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  font: {
    fontSize: 35,
    lineHeight: 60,
    color: "white",
    flexGrow: 1,
  },
  wrapper: { flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10 },
});
