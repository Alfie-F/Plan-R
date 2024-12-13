import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { loginWithGoogle, logoutUser, getUser } from "../../../lib/googleAuth";
import { googleLogin } from "../../../Utils/handleGoogleLogin";
import { Button } from "react-native-paper";
import { useUser } from "../../../contexts/UserContexts";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView, WebViewNavigation } from "react-native-webview";

export default function Auth2() {
  const handleGoogleLogin = async () => {
    const uri = await googleLogin();
    let result = await WebBrowser.openAuthSessionAsync(uri);
    return result;
  };

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#edab7d",
    justifyContent: "center",
  },
  button: {
    marginTop: "1%",
    marginBottom: "5%",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  webView: {
    width: 350,
    height: 700,
  },
});
