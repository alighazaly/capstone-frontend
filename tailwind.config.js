// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '375px'},  // Define sm to start from 375px
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    // Other configurations...
  },
  plugins: []
}
