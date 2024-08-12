/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-full": {
          "50%": {
            opacity: ".2",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        "slide-down": {
          from: {
            transform: "translateY(-5%)",
            opacity: 0.5,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(8%)",
            opacity: 0.5,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-left": {
          from: {
            transform: "translateX(-10%)",
            opacity: 0.5,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "slide-right": {
          from: {
            transform: "translateX(10%)",
            opacity: 0.5,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "pulse-full": "pulse-full 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in": "slide-in 0.2s ease-in-out forwards",
        "slide-out": "slide-out 0.2s ease-in-out forwards",
        "slide-down": "slide-down 0.15s ease-in-out",
        "slide-up": "slide-up 0.15s ease-in-out",
        "slide-left": "slide-left 0.15s ease-in-out",
        "slide-right": "slide-right 0.15s ease-in-out",
      },
      colors: {
        primary: "#2EB78B",
        secondary: "#0D9276",
        darker: "#0A6847",
        body: "#fafafa",
        lightPrimary: "#dcf7ef",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  important: false,
};
