import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("674f4fdd002611bf192a") // Replace with your project ID
  .setPlatform("com.example.plan-r");

export const account = new Account(client);
export const databases = new Databases(client);
