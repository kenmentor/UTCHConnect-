/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui"],
        plex: ['"IBM Plex Sans"', "sans-serif"],
        plexCondensed: ['"IBM Plex Sans Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
