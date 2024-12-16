import { ID } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account, databases } from "../lib/appwrite";
import { toast } from "../lib/toast";
import { Snackbar } from "react-native-paper";
import { Alert } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("guest");
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState();

  async function login(email, password) {
    setIsLoading(true);
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      setUser(await account.get());
      toast("Welcome back. You are logged in");
      navigation.navigate("Splash");
      setIsLoading(false);
    } catch (error) {
      if (error.code === 401) {
        Alert.alert(`A ${error.code} error occurred:`, error.message);
      } else {
        Alert.alert("An error occurred:", error.message);
      }
    }
  }

  // setUser(await account.get());

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    toast("Logged out");
  }

  async function register(email, password, name) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        await login(email, password), setUser(userAccount);
        Alert.alert("Account successfully created:", "Your are now logged in.");
      }
    } catch (error) {
      if (error.code === 409) {
        // 409 is the HTTP status code for conflict, used here for duplicate email
        Alert.alert(
          "An error occurred:",
          "Email already has an associated account. \nPlease log in or try new email."
        );
      } else {
        Alert.alert("An error occurred:", error.message);
      }
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      toast("Welcome back. You are logged in");
      setIsLoading(false);
    } catch (err) {
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  async function result() {
    try {
      setIsLoading(true);
      const information = await databases.listDocuments(
        "675c4e7e00394c1ff3ec",
        "675c4e8d0022f68b8e08"
      );
      setInfo(information);
      console.log(info);
      setIsLoading(false);
    } catch (err) {
      console.log("oops", err);
      Alert.alert(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        current: user,
        login,
        logout,
        register,
        toast,
        isLoading,
        setIsLoading,
        result,
        info,
        setInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
