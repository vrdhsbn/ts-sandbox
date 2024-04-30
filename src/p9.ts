// 5.0から導入されたDecorators
// 用途としてはこの例のようにログを出力したり、
// あとはメソッドの呼び出し頻度の制御、エラー処理の自動化、テストの簡素化、ファイルアクセスの制御、
// などに使えるみたい（Gemini情報）だけど具体的なイメージがわかないな。

// Decoratorに使う関数。anyを使わずに書けないのかな…。
function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext,
) {
  const methodName = String(context.name)
  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`)
    const result = originalMethod.call(this, ...args)
    console.log(`LOG: Exiting method '${methodName}'.`)
    return result
  }
  return replacementMethod
}

class MyPerson {
  name: string
  constructor(name: string) {
    this.name = name
  }

  // ここにDecoratorを置くとそのあとのメソッドをラップして実行できる。
  // クラスの中身を汚さずに副次的な処理を追加できるっていうイメージか。
  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}

const p = new MyPerson('Ray')
p.greet()

// 出力は以下のようになる。
// LOG: Entering method.
// Hello, my name is Ray.
// LOG: Exiting method.
