// 引数はstringまたはnumberである
export function uppercaseStrings(x: string | number) {
  if (typeof x === 'string') {
    // ここでxはstringであると確定する（だからtoUpperCase()が使える）
    // これはNarrowing（型の絞り込み）と呼ばれる
    return x.toUpperCase()
  }
}

// 5.4の変更点
// 型チェッカーは最後の代入箇所を探し、それに基づいて型の絞り込みを行うようになる
export function getUrls(url: string | URL, names: string[]) {
  if (typeof url === 'string') {
    // これはBiomeが出しているエラーでありTSのエラーではない
    url = new URL(url)
  }

  return names.map(name => {
    // 5.4以前では url は 'string | URL' と解釈され、
    // searchParams を呼び出すところで型エラーになる
    // 5.4では書き手の意図通りURL型になる
    url.searchParams.set('name', name)

    return url.toString()
  })
}
