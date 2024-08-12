// export const ENV = "PROD" as "PROD" | "DEV" | "STAGE";
// export const ENV = "STAGE" as "PROD" | "DEV" | "STAGE";
export const ENV = "DEV" as "PROD" | "DEV" | "STAGE";

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
const FRONTEND_URLS = {
  DEV: {
    BASE: "http://feerio.localhost:3000",
  },
  STAGE: {
    BASE: "https://www.feerio.live",
  },
  PROD: {
    BASE: "https://www.feerio.io",
  },
};

const DOMAIN_URL = {
  DEV: "feerio.localhost:3000",
  STAGE: "feerio.live",
  PROD: "feerio.io",
};

const PLAIN_DOMAIN = {
  DEV: ".feerio.localhost:3000",
  STAGE: ".feerio.live",
  PROD: ".feerio.io",
};

export const HTTP_PROTOCOL = ENV === "DEV" ? "http://" : "https://";

export const BASE_URL = URLS[ENV].BASE;
export const FRONTEND_BASE_URL = FRONTEND_URLS[ENV].BASE;
export const FRONTEND_DOMAIN_URL = DOMAIN_URL[ENV];
export const PLAIN_DOMAIN_URL = PLAIN_DOMAIN[ENV];

const STARTUP_TIER_CHECKOUT_URL = {
  DEV: "https://feerio.lemonsqueezy.com/buy/b18d9324-a50d-430d-b326-7fd7bbe3a45a",
  STAGE:
    "https://feerio.lemonsqueezy.com/buy/b18d9324-a50d-430d-b326-7fd7bbe3a45a",
  PROD: "https://feerio.lemonsqueezy.com/buy/fd64e2c9-fd84-4aea-aa50-a7d16aa06ed0",
};

const BUSINESS_TIER_CHECKOUT_URL = {
  DEV: "https://feerio.lemonsqueezy.com/buy/ea50936a-2312-4b74-b490-15bcbea89ab9",
  STAGE:
    "https://feerio.lemonsqueezy.com/buy/ea50936a-2312-4b74-b490-15bcbea89ab9",
  PROD: "https://feerio.lemonsqueezy.com/buy/7f18bf75-b573-475a-9b55-82d28dcd2529",
};

export const STARTUP_TIER_CHECKOUT_ACTION_URL = STARTUP_TIER_CHECKOUT_URL[ENV];
export const BUSINESS_TIER_CHECKOUT_ACTION_URL =
  BUSINESS_TIER_CHECKOUT_URL[ENV];

const KNOCK_PUBLIC_KEY = {
  DEV: "pk_test_1w0QOuUMtp78TkaTMrZQofJG2m-YKnYHiN76820AQyc",
  STAGE: "pk_test_1w0QOuUMtp78TkaTMrZQofJG2m-YKnYHiN76820AQyc",
  PROD: "pk_IKfZ-whe5yEZ4NNvpTyoE9TCbhNGp_6laEfV4oojDR4",
};

const KNOCK_CHANNEL_ID = {
  DEV: "8d05d2c0-32ce-4000-9859-dbdf305f72de",
  STAGE: "8d05d2c0-32ce-4000-9859-dbdf305f72de",
  PROD: "8d05d2c0-32ce-4000-9859-dbdf305f72de",
};

export const KNOCK_PUBLIC_KEY_VALUE = KNOCK_PUBLIC_KEY[ENV];
export const KNOCK_CHANNEL_ID_VALUE = KNOCK_CHANNEL_ID[ENV];
