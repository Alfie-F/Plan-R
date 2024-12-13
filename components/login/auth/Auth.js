// import React, { useState, useEffect } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   Dimensions,
//   Image,
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   StatusBar,
//   BackHandler,
// } from "react-native";
// import { Button, Modal, TextInput, Divider } from "react-native-paper";
// import { LinearGradient } from "expo-linear-gradient";
// import { useUser } from "../../../contexts/UserContexts";
// import { useNavigation } from "@react-navigation/native";
// import registerChecker2 from "../../../Utils/registerCheck2";
// import { googleLogin } from "../../../Utils/handleGoogleLogin";
// // import { GoogleSignin } from "react-native-google-signin";
// // import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
// import { authorize } from "react-native-app-auth";
// import { WebView } from "react-native-webview";

// const windowHeight = Dimensions.get("screen").height;
// const pic = require("../../../assets/ocean.jpg");

// export default function Auth({ logInPopUp, setLogInPopUp }) {
//   const user = useUser();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navigation = useNavigation();
//   const [register, setRegister] = useState([null, null]);
//   const [loggedIn, setLoggedIn] = useState(false);

//   //   GoogleSignin.configure({
//   //     clientID:
//   //       "76126334230-c1oirblk8vlqhr0d3f1ms01to75sh3ed.apps.googleusercontent.com",
//   //   });

//   //   const handleGoogleLogin = async () => {
//   //     const uri = await googleLogin();
//   //     console.log(uri);
//   //     let result = await WebBrowser.openAuthSessionAsync(uri);
//   //     console.log(result);
//   //     return result;
//   //   };

//   //   const handleGoogleLogin2 = async () => {
//   //     const uri = await googleLogin();
//   //     let result = await WebBrowser.openAuthSessionAsync(uri);
//   //     return result;
//   //   };

//   useEffect(() => {
//     setLoggedIn(user.current ? "true" : "false");
//   }, [user.current]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={pic}
//         style={styles.image}
//         backgroundColor={"#5FD3C9"}
//       >
//         <StatusBar
//           backgroundColor="transparent"
//           translucent={true}
//           hidden={true}
//         ></StatusBar>
//         <LinearGradient style={styles.hold} colors={["#5FD3C9", "transparent"]}>
//           <View>
//             <Text style={styles.title}>Plan-R</Text>
//             <Text style={styles.subtitle}>The Event Planning App</Text>
//           </View>
//           <View style={styles.wrapper2}></View>
//           <TextInput
//             value={email}
//             mode="outlined"
//             multiline={false}
//             placeholder="enter email here"
//             textAlign="default"
//             style={{
//               width: "80%",
//               maxHeight: 60,
//               textAlign: "center",
//             }}
//             theme={{ roundness: 20 }}
//             onChangeText={setEmail}
//           ></TextInput>
//           <Text
//             style={{
//               textAlign: "center",
//               paddingVertical: 2,
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {" "}
//             {register[0]}{" "}
//           </Text>
//           <TextInput
//             value={password}
//             mode="outlined"
//             multiline={false}
//             placeholder="enter password"
//             secureTextEntry={true}
//             textAlign="default"
//             style={{
//               width: "80%",
//               maxHeight: 60,
//               textAlign: "center",
//             }}
//             theme={{ roundness: 20 }}
//             onChangeText={setPassword}
//           ></TextInput>
//           <Text
//             style={{
//               textAlign: "center",
//               paddingVertical: 2,
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             {" "}
//             {register[1]}{" "}
//           </Text>
//           <View style={styles.wrapper}></View>
//           <Button
//             style={styles.button}
//             icon="login-variant"
//             mode="contained"
//             buttonColor="#5FD3C9"
//             textColor="white"
//             labelStyle={{ fontSize: 25, lineHeight: 30 }}
//             // onPressIn={() => setRegister(registerChecker2(email, password))}
//             onPress={() => {
//               //   if (JSON.stringify(register) == JSON.stringify([true, true])) {
//               handleGoogleLogin2();
//               //   }
//             }}
//           >
//             <Divider />
//             <Text>Sign In </Text>
//           </Button>
//           <Button
//             style={styles.button}
//             icon="login-variant"
//             mode="contained"
//             buttonColor="#5FD3C9"
//             textColor="white"
//             labelStyle={{ fontSize: 25, lineHeight: 30 }}
//             onPress={() => navigation.goBack()}
//           >
//             <Divider />
//             <Text style={styles}>Go Back </Text>
//           </Button>
//         </LinearGradient>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 60,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//     marginBottom: 40,
//     marginTop: windowHeight / 10,
//   },
//   container: {
//     height: "100%",
//     width: "100%",
//     // width: windowWidth,
//     flex: 1,
//     backgroundColor: "#edab7d",
//     justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     height: windowHeight + 20,
//     resizeMode: "cover",
//     marginTop: -40,
//   },
//   hold: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     height: "110%",
//     resizeMode: "cover",
//     marginBottom: "20%",
//   },
//   title: {
//     fontSize: 85,
//     lineHeight: 110,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//     marginTop: "10%",
//     fontFamily: "monospace",
//   },
//   subtitle: {
//     fontSize: 23,
//     lineHeight: 50,
//     fontWeight: "medium",
//     letterSpacing: 0.25,
//     color: "white",
//     fontFamily: "monospace",
//     textAlign: "center",
//   },
//   button: {
//     marginTop: "1%",
//     marginBottom: "5%",
//     width: "80%",
//     height: 60,
//     justifyContent: "center",
//   },
//   font: {
//     fontSize: 35,
//     lineHeight: 60,
//     color: "white",
//   },
//   wrapper: {
//     flexDirection: "column",
//     paddingVertical: "14%",
//   },
//   wrapper2: {
//     flexDirection: "column",
//     paddingVertical: "14%",
//   },
// });
