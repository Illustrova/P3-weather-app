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

export const getFormattedDate = (timestamp: number) => {
  const date = new Date(timestamp);
  console.log("🚀 ~ file: index.tsx ~ line 17 ~  date", date);
  const weekday = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  return `${weekday} — ${date.getDate()} ${month}`;
};
