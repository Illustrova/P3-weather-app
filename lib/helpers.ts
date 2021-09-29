// Helper function to validate error
// @see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43553#issuecomment-607427237
export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function isValidDate(d: Date) {
  return d instanceof Date && !isNaN(+d);
}
export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  if (!isValidDate(date)) {
    // backup for Safari - just prettify string a bit and return as-is
    return dateString.split(" ")[0];
  }
  const weekday = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  return `${weekday} — ${date.getDate()} ${month}`;
};
