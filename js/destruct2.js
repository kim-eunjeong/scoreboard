// 객체 해제 할당: 동일한 키로만 할당

// const obj = {a:1, b:2, c:3}
// const a =obj.a;
// const b=obj.b;

//한번에 할당
// const {a,b} = {a:1, b:2};
// console.log(a,b);
//1,2
// console.log(b,a);
//2 1

// const {a,b,c=30} = {a:1, b:2};
// console.log(a,b,c);
//1 2 30

//default parameter
const {a,b,...c} = {a:1, b:2, c:3, d:4, f:5};
console.log(a,b,c);
//1 2 { c: 3, d: 4, f: 5 }