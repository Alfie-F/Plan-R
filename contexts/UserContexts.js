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
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [loginToast, setLoginToast] = useState();
  const [getEvents, setGetEvents] = useState();

  async function login(email, password) {
    setIsLoading(true);
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      setUser(await account.get());
      toast("Welcome back. You are logged in");
      result();
      setIsLoading(false);
      return true;
    } catch (error) {
      if (error.code === 401) {
        setIsLoading(false);
        Alert.alert(`A ${error.code} error occurred:`, error.message);
      } else {
        setIsLoading(false);
        Alert.alert("An error occurred:", error.message);
      }
    }
  }

  async function logout() {
    setIsLoading(true);
    await account.deleteSession("current");
    setIsLoading(false);
    setUser(null);
    toast("Logged out");
  }

  async function register(email, password, name) {
    setIsLoading(true);
    try {
      const ident = ID.unique();
      const userAccount = await account.create(ident, email, password, name);
      if (userAccount) {
        await login(email, password), setUser(userAccount);
        await databases.createDocument(
          "675c4e7e00394c1ff3ec",
          "67682736001267585c90",
          ident,
          { EventsSignedUpFor: [] }
        );
        Alert.alert("Account successfully created:", "Your are now logged in.");
        setIsLoading(false);
      }
    } catch (error) {
      if (error.code === 409) {
        // 409 is the HTTP status code for conflict, used here for duplicate email
        Alert.alert(
          "An error occurred:",
          "Email already has an associated account. \nPlease log in or try new email."
        );
        setIsLoading(false);
      } else {
        Alert.alert("An error occurred:", error.message);
        setIsLoading(false);
      }
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      result();
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
      const response = await databases.listDocuments(
        "675c4e7e00394c1ff3ec",
        "675c4e8d0022f68b8e08"
      );
      setEvents(response.documents);
      setIsLoading(false);
    } catch (err) {
      Alert.alert(err);
    }
  }

  async function createEvent(location, moreDetails, event, date) {
    try {
      setIsLoading(true);
      const ident = ID.unique();
      const response = await databases.createDocument(
        "675c4e7e00394c1ff3ec",
        "675c4e8d0022f68b8e08",
        ident,
        {
          location,
          date,
          event_name: event,
          more_details: moreDetails,
        }
      );
      toast("event created successfully");
      setIsLoading(false);
    } catch (err) {
      Alert.alert(err);
    }
  }

  async function getEventsSigned(userID) {
    try {
      const eventsGot = await databases.getDocument(
        "675c4e7e00394c1ff3ec",
        "67682736001267585c90",
        userID
      );
      setGetEvents(eventsGot.EventsSignedUpFor);
      return eventsGot;
    } catch (err) {
      Alert.alert(err);
    }
  }

  async function signUp(eventID, userID) {
    try {
      const signedUp = await databases.updateDocument(
        "675c4e7e00394c1ff3ec",
        "67682736001267585c90",
        userID,
        { EventsSignedUpFor: eventID }
      );
    } catch (err) {
      Alert.alert(err);
    }
  }

  // async function deleteAccount(userID){

  // }

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
        events,
        setEvents,
        createEvent,
        getEventsSigned,
        getEvents,
        signUp,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
