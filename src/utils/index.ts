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

export function isElementOutsideTopViewport(element: HTMLElement): {
  outsideTop: boolean;
  isMobile: boolean;
} {
  const rect = element.getBoundingClientRect();
  // Check if the viewport width is less than or equal to 480px (mobile)
  const isMobile = window.innerWidth <= 480;
  const outsideTop = rect.top - 430 < 0;

  console.log(`outsideTop: ${outsideTop}, isMobile: ${isMobile}`);

  return { outsideTop, isMobile };
}
