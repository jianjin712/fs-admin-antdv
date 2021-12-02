module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    //"max-len": [0, 200, 2, { ignoreUrls: true }],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-unused-vars": [
    //   "error",
    //   {
    //     argsIgnorePattern: "^h$",
    //     varsIgnorePattern: "^h$",
    //   },
    // ],
    // "no-unused-vars": [
    //   "error",
    //   {
    //     argsIgnorePattern: "^h$",
    //     varsIgnorePattern: "^h$",
    //   },
    // ],
    // "vue/custom-event-name-casing": "off",
    // "no-use-before-define": "off",
    // "space-before-function-paren": "off",

    // "vue/attributes-order": "off",
    // "vue/one-component-per-file": "off",
    // "vue/html-closing-bracket-newline": "off",
    // "vue/max-attributes-per-line": "off",
    // "vue/multiline-html-element-content-newline": "off",
    // "vue/singleline-html-element-content-newline": "off",
    // "vue/attribute-hyphenation": "off",
    // "vue/require-default-prop": "off",
    // "vue/html-self-closing": [
    //   "error",
    //   {
    //     html: {
    //       void: "always",
    //       normal: "never",
    //       component: "always",
    //     },
    //     svg: "always",
    //     math: "always",
    //   },
    // ],

    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "consistent-return": 0,

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "vue/custom-event-name-casing": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",

    // 开发模式覆盖默认配置
    // 'semi-spacing': [0, { before: false, after: false }],
    // 'space-unary-ops': [0, { words: false, nonwords: false }],
    // 'space-in-parens': [0, 'always'],
    // 'space-infix-ops': [0, 'always'],
    "space-before-function-paren": "off",

    "vue/attributes-order": "off",
    "vue/one-component-per-file": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",

    "no-console": 0,
    "no-debugger": 0,
    "no-shadow": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-prototype-builtins": 0,
    "no-use-before-define": 0,
    "no-var": "error",
    //semi: 0,
    //camelcase: 0,
    "no-template-shadow": 0,
    "no-extra-boolean-cast": 0,
    "import/prefer-default-export": 0,
    "generator-star-spacing": 0,
    "vue/no-parsing-error": 0,
    "vue/no-unused-components": 0,
    "vue/require-default-prop": 0,
    "vue/no-template-shadow": 0,
    "vue/script-setup-uses-vars": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "no-dupe-keys": 0
  }
};
