/*
 * @Author: Mr Chang
 * @Date: 2021-01-14 20:22:31
 * @LastEditTime: 2021-01-14 20:30:17
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \fp\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-underscore-dangle': 0,
  },
};
