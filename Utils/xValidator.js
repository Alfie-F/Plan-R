export default function xValidator(str, num) {
  if (!str) return "Input can't be empty.";
  if (str.length > num)
    return "String must be less than " + num + " characters.";
  return true;
}
