// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 ❌
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)

// 함수에 인자로 들어오는 인자값을 재할당 하지말아라!
function display(num) {
    num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayobj(obj){
    obj.name = 'Bob' // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}
const ellie = {name:'Ellie'};
displayobj(ellie);
console.log(ellie);


// 이름을 변경하고싶다면!
function changelayobj(obj){ // 이름부터 변경하는 느낌을 주도록하고
    return {...obj, name:'Bob'}; // 반환할때는 새로운 오브젝트를 만들어야한다.
}