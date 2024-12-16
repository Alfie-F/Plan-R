import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Loading({ pic }) {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ImageBackground
        source={pic}
        style={styles.image}
        // backgroundColor={"#5FD3C9"}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={true}
        ></StatusBar>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={100} color={"#FFFFFF"}></ActivityIndicator>
          <Text style={styles.subtitle}> Loading...</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: -40,
  },
  loadingContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    // backgroundColor: "#5FD3C9",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
});
