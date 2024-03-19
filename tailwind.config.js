/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#fff",
        "neutral-black": "#263238",
        "text-gray-300": "#d9dbe1",
        gray: "rgba(255, 255, 255, 0.2)",
        "neutral-silver": "#f5f7fa",
        "brand-primary": "#4caf4f",
        "neutral-grey": "#717171",
        "neutral-d-grey": "#4d4d4d",
        "neutral-l-grey": "#88939e",
        gainsboro: "#e8e8e3",
        "text-gray-900": "#18191f",
        honeydew: "#e8f5e9",
        forestgreen: "rgba(76, 175, 79, 0.3)",
      },
      spacing: {},
      fontFamily: {
        "body-regular-body-3": "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        lg: "18px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "4xs-1": "8.1px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
}