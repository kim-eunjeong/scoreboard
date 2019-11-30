let book = {title: "인사이드 자바스크립트", price: 18000};
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
// let copyBook = {...book, a:'aaaa'};
let copyBook = {...book, ...{a:'aaaa'}, ...{title: 'bbbb'}};
copyBook.price = 30000;
console.log(book);
console.log(copyBook);


