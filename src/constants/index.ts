export const ENV = "PROD" as "PROD" | "DEV" | "STAGE";
// export const ENV = "STAGE" as "PROD" | "DEV" | "STAGE";
// export const ENV = "DEV" as "PROD" | "DEV" | "STAGE";
//
const URLS = {
  DEV: {
    BASE: "http://feerio.localhost:5000/api/v1/feerio",
  },
  STAGE: {
    BASE: "https://app.backend.feerio.live/api/v1/feerio",
  },
  PROD: {
    BASE: "https://app.backend.feerio.io/api/v1/feerio",
  },
};

const PLAIN_DOMAIN = {
  DEV: ".feerio.localhost:3000",
  STAGE: ".feerio.live",
  PROD: ".feerio.io",
};

export const HTTP_PROTOCOL = ENV === "DEV" ? "http://" : "https://";

export const BASE_URL = URLS[ENV].BASE;
export const PLAIN_DOMAIN_URL = PLAIN_DOMAIN[ENV];
