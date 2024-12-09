import passwordValidator from "./passwordValidator";
import emailValidator from "./emailValidator";
export default function registerChecker(email, password) {
  let valid = [emailValidator(email, password), passwordValidator(password)];

  return valid;
}
