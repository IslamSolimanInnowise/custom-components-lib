const tailwindConfig = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/index.html",
    "./src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
