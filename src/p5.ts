// Promise<T>：Promiseの型で、TはPromiseがfulfilledしたあとに返る値の型
// Awaited<Promise<T>>：Promise<T>からPromiseを剥がすような型

// A = string
export type A = Awaited<Promise<string>>
// B = number
export type B = Awaited<Promise<Promise<number>>>
// C = boolean | number
export type C = Awaited<boolean | Promise<number>>

type User = {
  id: number
  name: string
  email: string
}

// ユーザ情報をフェッチしてくるような関数。
// User型のオブジェクトが返ってくる予定であるPromise型を持つ。
declare function getUser(id: number): Promise<User>

// 以下のように定義したuserTypeは結果的にUserと同じ型になるわけだが、これの何が嬉しいのか？
// 普通にUser型を使うのではダメなのか？
// ChatGPTに聞いた感じでは、コードの可読性という点が大きいように感じる。
// 単にUser型のオブジェクトなのか、
// それとも「非同期処理の結果としてUser型のオブジェクトが返ってくるのか」を明示できるってこと。
export type userType = Awaited<Promise<User>>

// 以下の型と同義。つまりはUser型である。
// type userType = {
//   id: number
//   name: string
//   email: string
// }
