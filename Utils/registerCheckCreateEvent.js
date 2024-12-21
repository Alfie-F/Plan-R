import xValidator from "./xValidator";
import dateValidator from "./dateValidator";
export default function registerCheckerEvent(
  location,
  moreDetails,
  event,
  date
) {
  //   console.log(new Date(date) > new Date());
  let valid = [
    xValidator(location, 64),
    xValidator(moreDetails, 280),
    xValidator(event, 64),
    dateValidator(date),
  ];

  return valid;
}
