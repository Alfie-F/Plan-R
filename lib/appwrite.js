import { Client, Databases, Account } from "react-native-appwrite";
import Config from "react-native-config";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("674f4fdd002611bf192a");
// .setPlatform("com.example.planr");

export const account = new Account(client);
export const databases = new Databases(client);

// const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT;
// const APPWRITE_PROJECT_ID_ = Config.APPWRITE_PROJECT_ID;
