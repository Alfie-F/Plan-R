export default function dateFormatter(date) {
  const day = date.slice(0, 10);
  const time = date.slice(11, 16);
  return day + " " + time;
}
