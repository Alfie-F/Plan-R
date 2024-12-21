import { ID } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account, databases, teams } from "../lib/appwrite";
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
  const [events, setEvents] = useState([]);
  const [loginToast, setLoginToast] = useState();
  const [teamsData, setTeamsData] = useState();
  const [userTeamsList, setUserTeamsList] = useState([]);

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

  // async function guestLogin() {
  //   setIsLoading(true);
  //   try {
  //     const loggedIn = await account.createEmailPasswordSession(
  //       "guest@fakeemail.com",
  //       "12341234"
  //     );
  //     setUser(await account.get());
  //     toast("You are logged in as a guest");
  //     setIsLoading(false);
  //   } catch (error) {
  //     if (error.code === 401) {
  //       Alert.alert(`A ${error.code} error occurred:`, error.message);
  //     } else {
  //       Alert.alert("An error occurred:", error.message);
  //     }
  //   }
  // }

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
      result();
      getTeams();
      setIsLoading(false);
    } catch (err) {
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
    makeTeams();
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
      console.log("oops", err);
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
      const teaming = await teams.create(ident.toString(), event);
      // console.log(response, teaming, ident);
      toast("event created successfully");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      Alert.alert(err);
    }
  }

  async function getTeams() {
    try {
      const response = await teams.list();
      setTeamsData(response.teams);
    } catch (err) {
      console.log(err);
      Alert.alert(err);
    }
  }

  async function makeTeams() {
    setIsLoading(true);
    try {
      teamsData.forEach((event) => {
        events.forEach((teamObj) => {
          if (event.$id === teamObj.$id && !userTeamsList.includes(event.$id)) {
            setUserTeamsList((userTeamsList) => [...userTeamsList, event.$id]);
          }
        });
      });
      console.log(userTeamsList);
      setIsLoading(false);
    } catch {
      console.log(err);
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
        events,
        setEvents,
        createEvent,
        userTeamsList,
        makeTeams,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
