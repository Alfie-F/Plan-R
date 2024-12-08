import { account, databases, result } from "../lib/appwrite";

export default function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";

  //   console.log(result("email", email));

  return true;
}
