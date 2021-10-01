module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    defineProps: false,
  },
  rules: {
    /**
      @description 尾随逗号
    */
    'comma-dangle': [2, 'always-multiline'],
    /**
      @description 缩进风格
    */
    indent: [2, 2, {
      SwitchCase: 1,
    }],
    /**
      @description 不要求使用 === 和 !==
    */
    eqeqeq: 0,
  },
}
