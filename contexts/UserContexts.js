import { ID } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { toast } from "../lib/toast";
import { Snackbar } from "react-native-paper";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    console.log("inside log in");
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    setLoggedInUser(await account.get());
    console.log("Welcome back. You are logged in");
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    toast("Logged out");
  }

  async function register(email, password) {
    try {
      console.log("inside register");
      const userAccount = await account.create(ID.unique(), email, password);
      if (userAccount) {
        await login(email, password);
      } else return userAccount;
    } catch (error) {
      Snackbar.show({ text: "you've got an error here" });
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
