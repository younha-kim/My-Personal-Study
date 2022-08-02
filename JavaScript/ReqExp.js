/////////// 정규 표현식 리터럴 //////////
const target = 'Is all there is?';
// 패턴: is
// 플래그 : i => 대소문자를 구분하지 않고 검색 

 const regexp =  /is/i;
 console.log(regexp.test(target)); //true 


 ///////////RegExp 생성자 함수 ////////////
const target2 = 'Is this all there is?' 
// const regexp2 = new RegExp(/is/i);
// const regexp2 = new RegExp(/is/, 'i');
const regexp2 = new RegExp('is','i'); 
console.log(regexp2.test(target2)) // true 
console.log(regexp2) // /is/i


 ///////////RegExp 생성자 함수2 ////////////
 const count = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;
 //정규표현식 생성자 함수의 첫번째 인자에 변수가 들어올 수 있음. 
 console.log(count('Is this all there is?', 'is'));