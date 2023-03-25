module.exports = {
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "2020",
    ecmaFeatures: {
      "jsx": true,
      "ts": true
    }
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/v-on-event-hyphenation": "off",
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  root: true
};
