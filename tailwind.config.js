/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.js"], // Sửa lỗi cú pháp
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
