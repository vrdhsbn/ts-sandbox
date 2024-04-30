// 4.9から導入されたsatisfies演算子

type Colors = 'red' | 'green' | 'blue'
type RGB = [red: number, green: number, blue: number]

const palette: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} // satisfies Record<Colors, string | RGB>

// 大きな違いは変数の型がどう扱われるかということ。

// 普通に型アサーションで書くと変数の型は以下のようになる（抽象的）
// そして palette.green.toUpperCase() のメソッド呼び出しもエラーが出る。
// const palette: Record<Colors, string | RGB>

// satisfies だと palette の型は以下のようになる（具体的）
// palette.green.toUpperCase() もエラーにならない。
// const palette: {
//     red: [number, number, number];
//     green: string;
//     blue: [number, number, number];
// }

// redには配列のメソッドを使いたい
const redComponent = palette.red.at(0)
// greenには文字列のメソッドを使いたい
const greenNormalized = palette.green.toUpperCase()
