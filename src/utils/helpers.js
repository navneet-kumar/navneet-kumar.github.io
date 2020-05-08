import moment from "moment";

export function age(from) {
  var years = moment().diff(from, "years");
  var month = moment().diff(from, "months");
  var days = moment().diff(from, "days");
  return [years + " year ", month + " months ", days + " days "];
}
