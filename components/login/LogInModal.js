import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  BackHandler,
} from "react-native";
import { Button, Modal, TextInput, Divider } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";
import { useNavigation } from "@react-navigation/native";
import registerChecker2 from "../../Utils/registerCheck2";

const windowHeight = Dimensions.get("screen").height;
const pic = require("../../assets/ocean.jpg");

export default function LogInPage({ logInPopUp, setLogInPopUp }) {
  const user = useUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const [register, setRegister] = useState([null, null]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={pic}
        style={styles.image}
        backgroundColor={"#cfe2f3"}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        <View style={styles.hold}>
          <View>
            <Text style={styles.title}>Plan-R</Text>
            <Text style={styles.subtitle}>The Event Planning App</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.wrapper}>
              <Text style={styles.font}> Email: </Text>
              <TextInput
                value={email}
                mode="outlined"
                multiline={false}
                placeholder="enter email here"
                textAlign="default"
                style={{ width: 150, maxHeight: 60, textAlign: "center" }}
                onChangeText={setEmail}
              ></TextInput>
            </View>
            <Text
              style={{
                textAlign: "right",
                paddingRight: 20,
              }}
            >
              {" "}
              {register[0]}{" "}
            </Text>
            <View style={styles.wrapper}>
              <Text style={styles.font}> Password: </Text>
              <TextInput
                value={password}
                mode="outlined"
                multiline={false}
                placeholder="enter password"
                secureTextEntry={true}
                textAlign="default"
                style={{
                  textAlign: "center",
                  width: 150,
                  maxHeight: 60,
                  justifyContent: "center",
                }}
                onChangeText={setPassword}
              ></TextInput>
            </View>
            <Text
              style={{
                textAlign: "right",
                paddingRight: 20,
                paddingBottom: 5,
              }}
            >
              {" "}
              {register[1]}{" "}
            </Text>
          </View>
          <Button
            style={styles.button}
            icon="login-variant"
            mode="contained"
            buttonColor="white"
            textColor="black"
            marginBottom={"5%"}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
            onPressIn={() => setRegister(registerChecker2(email, password))}
            onPress={() => {
              if (JSON.stringify(register) == JSON.stringify([true, true])) {
                user.login(email, password);
              }
            }}
          >
            <Divider />
            <Text>Sign In </Text>
          </Button>
          <Button
            style={styles.button}
            icon="login-variant"
            mode="contained"
            buttonColor="white"
            textColor="black"
            marginBottom={"5%"}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
            onPress={() => navigation.goBack()}
          >
            <Divider />
            <Text style={styles}>Go Back </Text>
          </Button>
        </View>
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
  modalStyle: {
    backgroundColor: "#cfe2f3",
    padding: 20,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "10%",
    // marginRight: "10%",
    display: "flex",
    height: "110%",
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
    fontSize: 100,
    lineHeight: 110,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: "15%",
    fontFamily: "serif",
  },
  subtitle: {
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "medium",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "serif",
    textAlign: "center",
  },
  button: {
    marginTop: "5%",
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
  box: {
    backgroundColor: "#cfe2f3",
    borderRadius: "5%",
    opacity: 0.8,
    paddingTop: 10,
    marginBottom: "40%",
  },
});
