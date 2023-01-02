// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let birthYear= 2004
let year= 2022
let age= year- birthYear

if(age>=13 && age<=19){
  console.log(`Teenage`)
}
else if(age>=20 && age<=29){
  console.log(`Twenties`)
}