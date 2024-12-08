import { ID } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { toast } from "../lib/toast";
import { Snackbar } from "react-native-paper";
import { Alert } from "react-native";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    toast("Welcome back. You are logged in");
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
      console.log("account created");
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
        console.log("An error occurred:", error.message);
        Alert.alert("An error occurred:", error.message);
      }
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      toast("Welcome back. You are logged in");
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{ current: user, login, logout, register, toast }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
