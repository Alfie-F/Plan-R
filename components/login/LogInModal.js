import * as React from "react";
import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Button, Modal, TextInput } from "react-native-paper";

export default function LogIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View>
      <Text marginBottom={"5%"} style={styles.header}>
        Login{" "}
      </Text>
      <Text> Email: </Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        mode="outlined"
        multiline={false}
        placeholder="enter email here"
        textAlign="default"
        style={{ width: 200, maxHeight: 60 }}
      ></TextInput>
      <Text marginTop={"5%"}> Password: </Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        mode="outlined"
        multiline={false}
        placeholder="enter password"
        secureTextEntry={true}
        textAlign="default"
        style={{
          width: 200,

          maxHeight: 60,
          marginBottom: "5%",
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
