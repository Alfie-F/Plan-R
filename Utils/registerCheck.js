import passwordValidator from "./passwordValidator";
import emailValidator from "./emailValidator";
import nameValidator from "./nameValidator";
import passwordMatcher from "./passwordMatcher";
export default function registerChecker(email, password, name, password2) {
  let valid = [
    emailValidator(email),
    passwordValidator(password),
    nameValidator(name),
    passwordMatcher(password, password2),
  ];

  return valid;
}
