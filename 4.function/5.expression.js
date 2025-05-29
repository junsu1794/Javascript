// 함수 선언문 function name() { }

// 함수 표현식 const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸


// 거의 대부분 javascript에서 잘 쓰이지 않고 프론트엔드에서 가끔씩 즉각적으로 무언가 실행을 할때 사용할수도 있음. 많이 사용되지는 않는다.
// IIFF (ImmedicatelyInvoked Function Expressions)
(function run() {
  console.log('🔥');
})();
