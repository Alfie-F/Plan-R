import { Client, Databases, Account, Teams } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);
// .setPlatform("com.planr");

export const account = new Account(client);
export const databases = new Databases(client);
export const teams = new Teams(client);
