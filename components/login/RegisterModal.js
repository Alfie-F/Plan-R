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
import { useUser } from "../../contexts/UserContexts";
import registerChecker from "../../Utils/registerCheck";

export default function RegisterPage({ registerPopUp, setRegisterPopUp }) {
  const user = useUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [register, setRegister] = useState([null, null, null, null]);

  return (
    <Modal
      visible={registerPopUp}
      animationType="slide"
      onDismiss={() => setRegisterPopUp(false)}
      contentContainerStyle={styles.modalStyle}
    >
      <View style={{ alignItems: "center" }}>
        <Text marginBottom={"5%"} style={styles.header}>
          Register{" "}
        </Text>
        <Text marginTop={"5%"}> Name: </Text>
        <TextInput
          value={name}
          mode="outlined"
          multiline={false}
          placeholder="enter name"
          textAlign="default"
          style={{
            width: 200,
            maxHeight: 60,
          }}
          onChangeText={setName}
        ></TextInput>
        <Text style={{ marginBottom: "3%" }}> {register[2]} </Text>
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
        <Text style={{ marginBottom: "3%" }}> {register[0]} </Text>
        <Text> Password: </Text>
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
          }}
          onChangeText={setPassword}
        ></TextInput>
        <Text style={{ marginBottom: "3%" }}> {register[1]} </Text>
        <Text> Re-enter Password: </Text>
        <TextInput
          value={password2}
          mode="outlined"
          multiline={false}
          placeholder="re-enter password"
          secureTextEntry={true}
          textAlign="default"
          style={{
            width: 200,
            maxHeight: 60,
          }}
          onChangeText={setPassword2}
        ></TextInput>
        <Text style={{ marginBottom: "3%" }}> {register[3]} </Text>
        <Button
          mode="outlined"
          onPressIn={() =>
            setRegister(registerChecker(email, password, name, password2))
          }
          onPress={() => {
            console.log(register);
            if (
              JSON.stringify(register) ==
              JSON.stringify([true, true, true, true])
            ) {
              user.register(email, password, name);
            }
          }}
          marginBottom={"5%"}
        >
          <Text>Register </Text>
        </Button>
        <Button
          width="100%"
          marginBottom={"5%"}
          mode="outlined"
          onPress={() => setRegisterPopUp(false)}
        >
          <Divider />
          <Text>Continue Without Registering </Text>
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
