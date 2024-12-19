import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Modal } from "react-native-paper";
import { useUser } from "../../contexts/UserContexts";

export default function EventModal() {
  <Modal
    contentContainerStyle={styles.modalStyle}
    animationType="slide"
    visible={true}
  >
    <View>
      <Text style={styles.header}> Sign Up for event?</Text>
      <Button></Button>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
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
