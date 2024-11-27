import * as React from "react";
import { StatusBar } from "react-native";

export default function StatBar() {
  return (
    <StatusBar
      backgroundColor="white"
      translucent={false}
      hidden={false}
      options={{ headerLeft: null, gestureEnabled: false }}
      headerLeft={false}
    ></StatusBar>
  );
}
