type VerticalAlignment = 'top' | 'middle' | 'bottom'
type HorizontalAlignment = 'left' | 'center' | 'right'

// テンプレートリテラル型とユニオン型を組み合わせる
type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`

// これは以下と同義
// type Alignment = "top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"

const setAlignment = (value: Alignment) => {
  console.log(value)
}

// コーディング時に補完が利いてくれる
setAlignment('bottom-center')
// エラーが出るのでtypoを防げる（スペルチェックができる）
setAlignment('top-centre')
