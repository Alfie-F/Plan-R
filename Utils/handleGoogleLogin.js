import { Account } from "react-native-appwrite";

export const googleLogin = async () => {
  return await Account.createOAuth2Session("google");
};
