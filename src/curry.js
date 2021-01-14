/*
 * @Author: Mr Chang
 * @Date: 2021-01-06 16:48:05
 * @LastEditTime: 2021-01-14 20:31:58
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \fp\src\curry.js
 */
const _ = require('ramda');

// 练习 1
//= =============
// 通过局部调用（partial apply）移除所有参数
const split = _.curry((sep, str) => str.split(sep));
const words = (str) => split(' ', str);

const map = _.curry((fn, arr) => arr.map(fn));

// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组
const sentences = map(words);

// 通过局部调用（partial apply）移除所有参数
const match = _.curry((reg, x) => x.match(reg));

const filter = _.curry((fn, arr) => arr.filter(fn));

const filterQs = filter(match(/q/i));

// 练习 3
//= =============
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数

// 无须改动:
const _keepHighest = (x, y) => (x >= y ? x : y);

// 重构这段代码:
const reduce = _.curry((fn, init, arr) => arr.reduce(fn, init));
const max = reduce(_keepHighest, -Infinity);

// 彩蛋 1:
// ============
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
const slice = _.curry((start, end, arr) => arr.slice(start, end));

// 彩蛋 2:
// ============
// 借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。
const take = slice(0);
module.exports = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take,
};
