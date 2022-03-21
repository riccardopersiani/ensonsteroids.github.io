const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    height: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "600px",
      logo: "100px",
    },
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["synthwave"],
  },
};

module.exports = config;
