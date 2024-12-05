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
import { useUser, login } from "../../contexts/UserContexts";

export default function LogInPage({ logInPopUp, setLogInPopUp }) {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const changeModal = () => setLogInPopUp(!logInPopUp);

  return (
    <Modal
      visible={logInPopUp}
      animationType="slide"
      onDismiss={() => setLogInPopUp(false)}
      contentContainerStyle={styles.modalStyle}
    >
      <View style={{ alignItems: "center" }}>
        <Text marginBottom={"5%"} style={styles.header}>
          Login{" "}
        </Text>
        <Text> Email: </Text>
        <TextInput
          value={email}
          mode="outlined"
          multiline={false}
          placeholder="enter email here"
          textAlign="default"
          style={{ width: 200, maxHeight: 60 }}
          onChangeText={setEmail}
        ></TextInput>
        <Text marginTop={"5%"}> Password: </Text>
        <TextInput
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
          onChangeText={setPassword}
        ></TextInput>
        <Button
          width="100%"
          marginBottom={"5%"}
          mode="outlined"
          onPress={() => {
            user.login(email, password);
            console.log(email, password, user);
          }}
        >
          <Divider />
          <Text>Submit </Text>
        </Button>
        <Button
          width="100%"
          marginBottom={"5%"}
          mode="outlined"
          onPress={() => setLogInPopUp(false)}
        >
          <Divider />
          <Text>Continue Without Logging In </Text>
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modalStyle: {
    backgroundColor: "#cfe2f3",
    padding: 20,
    width: "auto",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    height: "auto",
  },
});
