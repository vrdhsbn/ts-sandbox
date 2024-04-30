// 型エイリアスによって、定義した型を再利用できる
type BasicPrimitive = number | string | boolean

export function doStuff1(value: BasicPrimitive) {
  const x = value
  return x
}

// タプル型は配列の要素の個数もチェックできる。この場合要素数は3つである必要がある。
// 通常の配列型の書き方（string[]など）では要素数までは決められない。
type Tupple = [string, number, boolean]

export const arr1: Tupple = ['hello', 42, true]
export const arr2: Tupple = ['hello', 42, true, 'hoge']

// rest要素をタプルの任意の位置に書ける（4.2以降）
// ただし最後の例のように複数のrest要素は書けない
type TuppleRest1 = [...string[], number]
type TuppleRest2 = [number, ...string[]]
type TuppleRest3 = [number, ...string[], boolean]
type TuppleRest4 = [number, ...string[], boolean, ...number[]]

export const arr3: TuppleRest1 = ['a', 'b', 'c', 100]
export const arr4: TuppleRest2 = [100, 'a', 'b', 'c']
export const arr5: TuppleRest3 = [100, 'a', 'b', 'c', false]
