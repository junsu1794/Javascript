// 접근제어자 - 캡슐화
// private(#이라는 키워드를 붙이면 됌), public(기본적으로 공개), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);