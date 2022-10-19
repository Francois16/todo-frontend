import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        light: "#f2f0ee",
        "light-grey": "#58595b",
        "dark-grey": "#2b2929",
      },
    },
  },
  plugins: [require("windicss/plugin/forms")],
});
