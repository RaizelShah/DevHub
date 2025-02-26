/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Dark mode background
        primary: "#1E90FF", // Vibrant blue for highlights
        secondary: "#8AB4F8", // Subtle UI elements
        textPrimary: "#EAEAEA", // Main text color
        textSecondary: "#B0B0B0", // Muted gray for less prominent text
        success: "#00C851", // Green for success messages
        error: "#FF4444", // Red for errors
        card: "#1E1E1E", // Dark gray for cards
        border: "#2A2A2A", // Soft contrast for borders
      },
    },
  },
  plugins: [],
}
