import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { account } from "../../../lib/appwrite";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser"; // Import expo-web-browser

export default function Auth2() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Google OAuth Configuration
  const GOOGLE_CLIENT_ID =
    "76126334230-c1oirblk8vlqhr0d3f1ms01to75sh3ed.apps.googleusercontent.com"; // Replace with your Google Client ID
  const REDIRECT_URI = "https://auth.expo.io/@alfief/planr";

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=openid profile email`;

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Open the Google OAuth URL using expo-web-browser
      const result = await WebBrowser.openBrowserAsync(googleAuthUrl);

      if (result.type === "success" && result.url.startsWith(REDIRECT_URI)) {
        const { queryParams } = AuthSession.parse(result.url);
        const idToken = queryParams.id_token; // Extract the id_token

        if (idToken) {
          // Use the Google ID token to authenticate with Appwrite
          account.createOAuth2Session("google", idToken).then(
            (response) => {
              Alert.alert(
                "Login Success",
                "You have successfully logged in with Google"
              );
              console.log(response); // Handle the response as needed
              setIsAuthenticated(true); // Set authentication state to true
            },
            (error) => {
              console.error("Appwrite Login Error:", error);
              Alert.alert(
                "Login Error",
                "An error occurred during login. Please try again."
              );
            }
          );
        } else {
          Alert.alert("Error", "ID Token not found");
        }
      } else {
        // Handle the case when the URL doesn't match the redirect URI or the login was canceled
        Alert.alert("Login Error", "Login was not completed successfully.");
      }
    } catch (err) {
      console.error("Error opening WebBrowser", err);
      Alert.alert(
        "Error",
        "An error occurred while trying to open the login URL."
      );
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isAuthenticated ? (
        <Alert
          title="Authenticated"
          message="You are successfully logged in."
        />
      ) : (
        <Button
          style={styles.button}
          icon="login-variant"
          mode="contained"
          buttonColor="#5FD3C9"
          textColor="white"
          labelStyle={{ fontSize: 25, lineHeight: 30 }}
          onPress={handleLogin}
          loading={loading} // Show loading state while in the process
        >
          <Text>Google</Text>
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "1%",
    marginBottom: "5%",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
});
