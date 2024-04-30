// クラスの値の取得と設定
class MyClass {
  #size = 4

  // getter
  get size() {
    return this.#size
  }

  // setter
  set size(num: number) {
    this.#size = num
  }

  // method
  print(num?: number) {
    if (!num) {
      console.log('print!')
    } else {
      for (let i = 0; i < num; i++) {
        console.log('print!')
      }
    }
  }
}

const myClass = new MyClass()

console.log(myClass.size)

myClass.size = 5

console.log(myClass.size)

myClass.print(3)
