type AppConfig1 = {
  [key: string]: string | number | boolean
}

const config1: AppConfig1 = {
  theme: 'dark',
  version: 1.0,
  notificationEnabled: true,
}

console.log(config1.theme)

// こういう書き方もできると思うけどプラクティスとしてはどっちが良いんだろう？
// ぱっと見でオブジェクトってわかるので AppConfig1 のほうが可読性が高いか？
type AppConfig2 = Record<string, string | number | boolean>

const config2: AppConfig2 = {
  theme: 'dark',
  version: 1.0,
  notificationEnabled: true,
}

console.log(config2.theme)
