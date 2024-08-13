export const formatDate = (dateInput: Date | string): string => {
  // Convert string to Date object if necessary
  const date: Date =
    typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };

  // If invalid date is passed, return empty string
  if (isNaN(date.getTime())) {
    console.log("Invalid date");
    return "";
  }

  const dayMonth = new Intl.DateTimeFormat("en-GB", options).format(date);
  const year = date.getFullYear();
  console.log(`${dayMonth}, ${year}`);
  return `${dayMonth}, ${year}`;
};
