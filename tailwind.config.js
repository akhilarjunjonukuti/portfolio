/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#007BFF", // Branding color (blue)
          secondary: "#6C757D", // Muted highlight (gray)
          background: "#FFFFFF", // White (background)
          surface: "#F8F9FA", // Light gray (card background)
          textPrimary: "#808080", // Main text (dark gray)
          textSecondary: "#6C757D", // Muted text (gray)
          border: "#E9ECEF", // Light gray (borders)
          headerText: "rgb(0 0 0 / 73%)", // White (header text)
        },
        dark: {
          primary: "#4A90E2", // Branding color for dark mode (light blue)
          secondary: "#ADB5BD", // Muted highlight (light gray)
          background: "#121212", // Very dark gray (background)
          surface: "#1E1E2C", // Slightly lighter gray for surfaces
          textPrimary: "#808080", // White (text)
          textSecondary: "#A0A0A0", // Muted gray (text)
          border: "#333344", // Dark gray (borders)
          headerText: "white", // Black (header text)
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  safelist: [
    "text-light-primary",
    "text-dark-primary",
    "text-light-headerText",
    "text-dark-headerText",
    "border-light-primary",
    "border-dark-primary",
    "text-light-textPrimary",
    "text-dark-textPrimary",
    "text-light-secondary",
    "bg-light-background",
    "bg-dark-background",
  ],
  plugins: [],
};
