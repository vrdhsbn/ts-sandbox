// 5.2で導入されたusing宣言
// const, var, let みたいな宣言のひとつ。
// 一時ファイルの内容など、後に解放されるリソースを宣言する。
// フロントエンドだとフェッチしたデータ、DOMリソース、イベントリスナーなどの例が出てきた（Gemini情報）
// （でもなんだかサンプルコードが怪しいので要調査）

// TempFile は Disposable型を使って別途実装する必要ありなのか。
export function doSomeWork() {
  using file = new TempFile('.some_temp_file')
  // use file...
  if (someCondition()) {
    // do some more work...
    return
  }
}

// 従来だとリソース解放のためにあれこれと記述する必要があった
// そのための記述が上の例のTempFileのようなクラスに書いておけるのかな。
// export function doSomeWork() {
//   const path = '.some_temp_file'
//   const file = fs.openSync(path, 'w+')
//   try {
//     // use file...
//     if (someCondition()) {
//       // do some more work...
//       return
//     }
//   } finally {
//     // Close the file and delete it.
//     fs.closeSync(file)
//     fs.unlinkSync(path)
//   }
// }
