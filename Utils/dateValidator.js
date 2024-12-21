export default function dateValidator(date) {
  if (new Date(date) < new Date()) return "Date & Time must be in the future.";
  return true;
}
