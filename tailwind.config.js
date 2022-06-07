module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "black-primary": "#0f0e0e",
        "blanc-primary": "#f4f1f1",
        "Gris_Clair": "#dbdbdb",
        "Rouge": "#a40b0b",
        "darkred": "e40b0b",
        "star-color": "#dbde4c"
      },
      "fontSize": {
        "sm": "0.625rem",
        "base": "0.9375rem",
        "lg": "1.0625rem",
        "xl": "1.875rem"
      },
      "fontFamily": {
        "raleway": "Raleway",
        "comfortaa": "Comfortaa"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.1875rem",
        "sm": "0.3125rem",
        "default": "0.4159836173057556rem",
        "lg": "0.4305340349674225rem",
        "xl": "0.5rem",
        "2xl": "0.625rem",
        "3xl": "0.9375rem",
        "4xl": "1.25rem"
      }
    }
  },

  plugins: [],
}
