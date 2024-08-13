import { BASE_URL } from "../constants";
import axios from "./axios";

import axios_ from "./axios";

export const fetchOwner = async (id?: string) => {
  let isOwnerAvailable = JSON.parse(localStorage.getItem("owner") ?? "{}")?._id;
  if (!isOwnerAvailable) {
    console.log("No owner found");
    localStorage.removeItem("owner");
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("accountType");
    window.location.href = "/login";
    return;
    // window.location.reload();
  }

  let user = JSON.parse(localStorage.getItem("owner") ?? "");
  try {
    let { data } = await axios.get(`${BASE_URL}/owners?id=${id ?? user._id}`);
    // console.log("===================", data.success, data.owner);
    if (data.success === false) {
      console.log("No owner found");
      localStorage.removeItem("owner");
      localStorage.removeItem("currentUserEmail");
      localStorage.removeItem("accountType");
      window.location.reload();
    }
    return data.owner;
  } catch (error) {
    localStorage.removeItem("owner");
  }
};

export const fetchOwnerLocal = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    const user = localStorage.getItem("owner") || "null";
    if (user === "null" || user === null || user === "undefined") {
      return null;
    }
    return JSON.parse(user);
    // const {data} = await axios.get("/auth/user")
    // return data;
  }
};

export const fetchOwnerUsingToken = async (ownerEmail?: string) => {
  try {
    // get ownerEmail from cookie
    // const ownerEmail = document.cookie
    //   .split(";")
    //   .find((c) => c.trim().startsWith("ownerEmail="))
    //   ?.split("=")[1];

    // console.log("ownerEmail from cookie", ownerEmail);

    let { data } = await axios_.get(`/ownersVerified?email=${ownerEmail}`);
    // console.log("===================", data.success, data.owner);
    if (data.success === false) {
      return false;
    }
    localStorage.setItem("owner", JSON.stringify(data.owner));
    localStorage.setItem("currentUserEmail", data.owner.email);
    localStorage.setItem("accountType", data.owner.accountType);
    return data.owner;
  } catch (error) {
    return false;
  }
};

export const waitFor = (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
};

export const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

const pluralize = (value: number, unit: string): string => {
  return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
};

export const generalizedPluralize = (value: number, unit: string): string => {
  return `${unit}${value !== 1 ? "s" : ""}`;
};

export const getElapsedTime = (chatCreatedAt: string | undefined): string => {
  if (!chatCreatedAt) return "just now";

  const now = new Date().getTime();
  const createdAt = new Date(chatCreatedAt).getTime();
  const elapsedTimeInMinutes = (now - createdAt) / (1000 * 60); // Calculate elapsed time in minutes

  if (elapsedTimeInMinutes < 1) {
    return "just now";
  } else if (elapsedTimeInMinutes < 60) {
    return pluralize(Math.floor(elapsedTimeInMinutes), "minute");
  } else if (elapsedTimeInMinutes < 1440) {
    return pluralize(Math.floor(elapsedTimeInMinutes / 60), "hour");
  } else if (elapsedTimeInMinutes < 28800) {
    // 20 days in minutes
    return pluralize(Math.floor(elapsedTimeInMinutes / 1440), "day");
  } else {
    return formatDate(new Date(chatCreatedAt));
  }
};

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

export const getRemainingDays = (
  startDate: string,
  endDate: string
): number => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const remainingDays = (end - start) / (1000 * 60 * 60 * 24);
  return +remainingDays.toFixed(0);
};

// write a function to get thousand as k, million as m, billion as b
export const formatNumber = (value: number): string => {
  if (value < 1000) {
    return value.toString();
  } else if (value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`;
  } else if (value < 1000000000) {
    return `${(value / 1000000).toFixed(1)}m`;
  } else {
    return `${(value / 1000000000).toFixed(1)}b`;
  }
};

export const calculatePercentageChange = (data: { x: number; y: number }[]) => {
  let y0 = data[0].y || 1;
  let yn = data[data.length - 1].y || 1;

  // return ((yn - y0) / y0) * 100;
  // return in whole number
  return Math.round(((yn - y0) / y0) * 100);
};
