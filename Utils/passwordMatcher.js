export default function passwordMatcher(password, password2) {
  if (password != password2) {
    return "Passwords must match.";
  } else return true;
}
