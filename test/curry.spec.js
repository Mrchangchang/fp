/*
 * @Author: Mr Chang
 * @Date: 2021-01-06 17:01:35
 * @LastEditTime: 2021-01-07 17:11:11
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \fp\test\curry.spec.js
 */
const curry = require('../src/curry')

const { words, sentences, filterQs, max, slice, take } = curry

describe('curry js', () => {
  test('通过局部调用（partial apply）移除所有参数', () => {

    expect(words('hello world')).toEqual(['hello', 'world'])

  })

  test('使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组', () => {
    expect(sentences(["Jingle bells Batman smells", "Robin laid an egg"])).toEqual([['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']])
  })

  test('通过局部调用（partial apply）移除所有参数', () => {
    expect(filterQs(['quick', 'camels', 'quarry', 'over', 'quails'])).toEqual(['quick', 'quarry', 'quails'])
  })

  test('使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数', () => {
    expect(max([323,523,554,123,5234])).toBe(5234)
  })
  
  test('包裹数组的 `slice` 函数使之成为 curry 函数', () => {
    expect(slice(1)(3)(['a', 'b', 'c'])).toEqual(['b', 'c'])
  })

  test('借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。', () => {
    expect(take(2)(['a', 'b', 'c'])).toEqual(['a', 'b'])
  })
}) 