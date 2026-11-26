// let a=10;
// let b=40;
// console.log("sum of two numbers:",a+b);

// let a=30;
// let b=10;
// console.log("Sub of two numbers",a-b); 

// let x=40;
// let y=50;
// console.log("Multiple of two numbers:",x*y);

// let y=2;
// let x=5;
// console.log("Divesion of two numbers:",y%x);

// let a=4;
// let b=6;
// console.log(a/b);

// let a=20;
// if(a%2==0){
//     console.log("It is even number",a);
// }
// else{
//     console.log("It is not even number",a)
// }

// Largest of Three Numbers

// a=20;
// b=30;
// c=40;
// if(a>b && a>c){
//     console.log("Biggest number is",a);
// }
// else if(b>a && b>c){
//     console.log("Biggest number is",b);
// }
// else{
//     console.log("Biggest number is",c);
// }

// Check whether a number is Positive, Negative or Zero
// let num=-10;
// if(num>0){
//     console.log("It is Positive Number",num);
// }
// else if (num < 0) {
//     console.log("It is Negative Number", num);
// }
// else{
//     console.log("It is Zero", num);
// }

// Find the Smallest of Three Numbers.
// let a = 20;
// let b = 10;
// let c = 30;

// if(a<b && a<c){
//     console.log("Smallest number is",a);
// }
// else if(b<a && b<c){
//     console.log("Smallest number is",b);
// }
// else{
//     console.log("Smallest number is",c);
// }

// Find the Largest of Two Numbers
// let a = 50;
// let b = 30;

// if(a>b){
//     console.log("It is beggest number",a);
// }
// else{
//     console.log("It is not beggest number",b);
// }

// Check whether a person is eligible to vote

// let age = 20;
// if(age>=18){
//     console.log("Eligible to vote",age);
// }
// else{
//     console.log("Not Eligible to vote")
// }

// Check whether a student passed or failed

// let marks = 35;
// if(marks>=35){
//     console.log("Pass",marks);
// }
// else{
//     console.log("Fail",marks);
// }

// Find the grade of a student based on percentage.

// let percentage = 85;
// if(percentage>=90){
//     console.log("Grade A+",percentage);
// }
// else if(percentage>=80){
//     console.log("Grade A",percentage);
// }
// else if(percentage>=70){
//     console.log("Grade B",percentage);
// }
// else if(percentage>=60){
//     console.log("Grade C",percentage);
// }
// else{
//     console.log("Fail",percentage);
// }





// Write a JavaScript program to check whether a given year is a Leap Year or Not.
// let year = 2024;
// if(year % 400==0 ||(year%4==0 && year%100!=0)){
//     console.log("It is leap year",year);
// }
// else{
//     console.log("it is not leap year",year);
// }

// Check Divisibility by 5 and 11

// let num = 55;
// if(num%5==0 && num%11==0){
//     console.log("is divisible by 5 and 11");
// }
// else{
//     console.log("It is not is divisible by 5 and 11");
// }

// let ch = "b";
// if(ch=='a' || ch=='e'|| ch=='i' || ch=='o'|| ch=='u'){
//     console.log(ch,"is a Vowel");
// }
// else{
//     console.log(ch, "is a Consonant");
// }

// Check Even or Odd using Ternary Operator

// let num = 7;
// console.log(num%2==0?"even":"odd");

// let num = 21;
// if(num%3==0 && num%7==0){
//     console.log("num is  divisible by 3 and 7");
// }
// else{
//     console.log("num is not  divisible by 3 and 7")
// }

// let form=document.querySelector("form")

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let password=document.querySelector('[name="password"]').value;
//     let confirmPassword=document.querySelector('[name="confirmPassword"]').value;
//     let email=document.querySelector('[name="email"]').value;
//     if(password.length<6){
//     alert("Password must be at least 6 characters");
//     }
//     else if(password!==confirmPassword){
//     alert("Password does not match");
//     }
//     else if(!email.includes("@")){
//     alert("Invalid Email include @");
//     }
//     else{
//     alert("Registration Successful!");
//     }
// })

// let h2 = document.querySelector("body");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     if (h2.style.backgroundColor === "black") {
//         h2.style.backgroundColor = "white";
//         h2.style.color = "black"
//     }

//     else {
//         h2.style.backgroundColor = "black";
//         h2.style.color = "white"
//     }
//     // h2.style.backgroundColor="black"
//     // h2.innerHTML='<span style="color:green;">Welcome to</span><span style="color:blue;">javascript</span>';
// })


// let password = document.querySelector('[name="password"]');
// let button = document.querySelector("#toggle");

// button.addEventListener("click", function (event) {
//     if (password.type === "password") {
//         password.type = "text"
//         button.innerText = "👁️";
//     }
//     else {
//         password.type = "password";
//         button.innerText = "🙈";
//     }
// })

// let email = document.querySelector("#email");
// let show = document.querySelector("#show");
// email.addEventListener("input", function (event) {
//     show.innerText = "your email is: " + email.value;
// })


// let inpname=document.querySelector("#name");
// let count=document.querySelector("#count");

// inpname.addEventListener("input",function(event){
// count.innerText="Characters:"+inpname.value.length;
// })


// let password=document.querySelector("#password");
// let result=document.querySelector("#result");

// password.addEventListener("input",function(event){
// if(password.value.length>=6){
//     result.innerText = "Strong Password:";
// }
// else{
//      result.innerText = "Weak Password:";
// }
// })

let count = document.querySelector("#count");
let increase = document.querySelector("#increase");
let number = 0;
increase.addEventListener("click", function (event) {
    number = number + 1;
    count.innerText = number;
})


let decrease = document.querySelector("#decrease");
decrease.addEventListener("click", function (event) {
    number = number - 1;
    count.innerText = number;
})

let reset=document.querySelector("#reset");
reset.addEventListener("click",function(event){
number=0;
count.innerText=number;
})