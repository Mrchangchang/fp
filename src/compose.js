/*
 * @Author: Mr Chang
 * @Date: 2021-01-08 14:15:14
 * @LastEditTime: 2021-01-14 20:31:22
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \fp\src\compose.js
 */
const _ = require('ramda');
const accounting = require('accounting');

// 示例数据
const CARS = [
  {
    name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true,
  },
  {
    name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false,
  },
  {
    name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false,
  },
  {
    name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false,
  },
  {
    name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true,
  },
  {
    name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false,
  },
];

// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
// var isLastInStock = function(cars) {
//   var last_car = _.last(cars);
//   return _.prop('in_stock', last_car);
// };
const isLastInStock = _.compose(_.prop('in_stock'), _.last);

// 练习 2:
// ============
// 使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name
const nameOfFirstCar = _.compose(_.prop('name'), _.head);

// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
const map = _.curry((fn, arr) => arr.map(fn));
const reduce = _.curry((fn, init, arr) => arr.reduce(fn, init));
const add = _.curry((a, b) => a + b);

const _average = (xs) => reduce(add, 0, xs) / xs.length; // <- 无须改动

// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

const averageDollarValue = _.compose(_average, map(_.prop('dollar_value')));

/**
 * 练习 4:
 * ============
 * 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：
 * 例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。
 */

const toLowerCase = (x) => x.toLowerCase();
const replace = _.curry((reg, s, str) => str.replace(reg, s));

const _underscore = replace(/\W+/g, '_'); // <-- 无须改动，并在 sanitizeNames 中使用它

const sanitizeNames = map(_.compose(toLowerCase, _underscore, _.prop('name')));

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices
const join = _.curry((s, arr) => arr.join(s));

// var availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value);
//   }).join(', ');
// };
const formatMoney = (x) => accounting.formatMoney(x.dollar_value);
const availablePrices = _.compose(join(', '), map(formatMoney), _.filter(_.prop('in_stock')));

// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()

// var fastestCar = function(cars) {
//   var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//   var fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// };

const menaName = (name) => `${name} is the fastest`;

const fastestCar = _.compose(menaName, _.prop('name'), _.last, _.sortBy((car) => car.horsepower));

module.exports = {
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar,
  CARS,
};
