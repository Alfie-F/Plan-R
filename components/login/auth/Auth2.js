import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { loginWithGoogle, logoutUser, getUser } from "../../../lib/googleAuth";
import { googleLogin } from "../../../Utils/handleGoogleLogin";
import { Button } from "react-native-paper";
import { useUser } from "../../../contexts/UserContexts";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView, WebViewNavigation } from "react-native-webview";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";
import { account } from "../../../lib/appwrite";
import * as AuthSession from "expo-auth-session";

export default function Auth2() {
  const [showWebView, setShowWebView] = useState(false);
  // Google OAuth Configuration
  const GOOGLE_CLIENT_ID =
    "76126334230-c1oirblk8vlqhr0d3f1ms01to75sh3ed.apps.googleusercontent.com"; // Replace with your Google Client ID
  const REDIRECT_URI = "https://auth.expo.io/@alfief/planr";
  const scopes = ["openid", "profile"];

  const handleLogin = () => {
    setShowWebView(true);
  };

  const handleNavigationStateChange = (state) => {
    if (state.url.includes("YOUR_REDIRECT_URI")) {
      // Extract the ID token from the URL and authenticate with Appwrite
      const urlParams = new URLSearchParams(state.url.split("?")[1]);
      const idToken = urlParams.get("id_token");

      if (idToken) {
        // Use the Google ID token to authenticate with Appwrite
        account.createOAuth2Session("google", idToken).then(
          (response) => {
            Alert.alert(
              "Login Success",
              "You have successfully logged in with Google"
            );
            console.log(response); // Use response as needed
          },
          (error) => {
            console.error(error);
            Alert.alert(
              "Login Error",
              "An error occurred during login. Please try again."
            );
          }
        );
      } else {
        Alert.alert("Error", "ID Token not found");
      }

      setShowWebView(false); // Close WebView after login
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {showWebView ? (
        <WebView
          source={{
            uri: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=openid`,
          }}
          onNavigationStateChange={handleNavigationStateChange}
        />
      ) : (
        <Button title="Login with Google" onPress={handleLogin} />
      )}
    </View>
  );
}
