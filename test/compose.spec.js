/*
 * @Author: Mr Chang
 * @Date: 2021-01-08 14:21:02
 * @LastEditTime: 2021-01-08 15:35:18
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \fp\test\compose.spec.js
 */
const { isLastInStock, nameOfFirstCar,averageDollarValue, sanitizeNames, availablePrices,fastestCar, CARS } = require('../src/compose')

describe('compose.js', () => {
  test('使用 _.compose()', () => {
    expect(isLastInStock(CARS)).toBe(false)
  })

  test('使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name', () => {
    expect(nameOfFirstCar(CARS)).toBe('Ferrari FF')
  })

  test('使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合', () => {
    expect(averageDollarValue(CARS)).toBe(790700)
  })

  test('使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串', () => {
    expect(sanitizeNames(CARS)).toEqual(['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra'])
  })

  test('彩蛋 1', () => {
    expect(availablePrices(CARS)).toBe('$700,000.00, $1,850,000.00')
  })

  test('彩蛋 2', () => {
    expect(fastestCar(CARS)).toBe('Aston Martin One-77 is the fastest')
  })
})