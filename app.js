
let n = Number(prompt("nhập số nguyên dương"))
let inputNumber = Number(prompt("nhập số"))
let oppositeNumber

 if(inputNumber<(n/2)){
    oppositeNumber= (n/2)+inputNumber
 }
 else{
    oppositeNumber= inputNumber - (n/2)
 }
console.log(oppositeNumber)

let myS1 = "abc";
let myS2 = "1234";
let mergeS = "";

let alo = (a, b) => {
  let result = [];
  let lengthMin = a.length > b.length ? b.length : a.length;
  for (let i = 0; i < lengthMin; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }
  console.log(result);
};

