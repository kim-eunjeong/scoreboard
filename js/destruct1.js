//배열 해제 할당: 순서대로 할당
// const [a, b, c] = [10, 20];
// console.log(a, b, c);
// 10 20 undefined

//c=30 -> default parameter 문법
// const [a, b, c=30] = [10, 20];
// console.log(a, b, c);
//10 20 30

//...c -> ...나머지 연산자 (c에 남은 파라미터 다 받겠다=> 여러개 받으므로 배열형태로 바뀜)
// const [a,b , ...c] = [10, 20, 30, 40, 50];
// console.log(a, b, c);
// 10 20 [ 30, 40, 50 ]


