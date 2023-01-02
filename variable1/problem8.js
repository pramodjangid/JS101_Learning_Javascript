// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_id = "masai"
let database_pw = "1234"
    
let login_id= "masai";
let login_pw= "1234";


if(database_id== login_id){
  
  if(database_pw == login_pw){
    console.log("user can login")
  }
  else{
    console.log("user can not login")
  }
}