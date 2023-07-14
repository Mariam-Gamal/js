/* ====================Q1====================== */
// var num=window.prompt("Enter Number");
// console.log(num);

/* ====================Q1====================== */
// var num=Number(window.prompt("Enter Number"));

// if(num % 3 ==0 && num % 4 ==0 ) {
//     console.log("Yes")
// }else{console.log("No")}

/* ====================Q3====================== */
// var num1=Number(window.prompt("Enter Number1"));
// var num2=Number(window.prompt("Enter Number2"));
// if(num1>num2){
//     console.log(num1)
// }else{console.log(num2)}

/* ====================Q4====================== */
// var num=Number(window.prompt("Enter Number"));
// if(num<0){
//     console.log("negative");
// }else{console.log("positive");}

/* ====================Q5====================== */
// var num1=Number(window.prompt("Enter Number1"));
// var num2=Number(window.prompt("Enter Number2"));
// var num3=Number(window.prompt("Enter Number3"));

// if(num1>=num2 && num1>=num3){
//     console.log("max elemnt= " + num1);
// }
// else if(num2>=num1 && num2>=num3){
//     console.log("max elemnt= " + num2);
// }
// else if(num3>=num1 && num3>=num2){
//     console.log("max elemnt= " + num3);
// }
// if(num1<=num2 && num1<=num3){
//     console.log("min elemnt= " + num1);
// }
// else if(num2<=num1 && num2<=num3){
//     console.log("min elemnt= " + num2);
// }
// else if(num3<=num1 && num3<=num2){
//     console.log("min elemnt= " + num3);
// }

/* ====================Q6====================== */
// var num=Number(window.prompt("Enter Number"));
// if(num % 2 == 0){
//     console.log("even")
// }else{console.log("odd");}

/* ====================Q8====================== */
// var let=window.prompt("Enter Letter");
// if(let =="a" || let=="e" || let=="i" || let=="o" || let=="u" ){
//     console.log("vowel");
// }else{console.log("consonant");}

/* ====================Q9====================== */
// var num=Number(window.prompt("Enter Number"));

// for(var i=1 ;i<=num ; i++){
//     console.log(i)
// }

/* ====================Q10====================== */
// var num=Number(window.prompt("Enter Number"));

// for(var i=1 ;i<=12 ; i++){
//        console.log(i * num)
// }

/* ====================Q11====================== */
// var num=Number(window.prompt("Enter Number"));

// for(var i=1 ;i<=num ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

/* ====================Q12====================== */
// var num1=Number(window.prompt("Enter Number1"));
// var num2=Number(window.prompt("Enter Number2"));
// var result= num1 ** num2 
// console.log(result);

/* ====================Q12====================== */
// var mark1=Number(window.prompt("Enter Your Mark Of Subject 1"));
// var mark2=Number(window.prompt("Enter Your Mark Of Subject 2"));
// var mark3=Number(window.prompt("Enter Your Mark Of Subject 3"));
// var mark4=Number(window.prompt("Enter Your Mark Of Subject 4"));
// var mark5=Number(window.prompt("Enter Your Mark Of Subject 5"));

// var total= mark1+mark2+mark3+mark4+mark5
// console.log("Total Marks = " + total);

// var Avg = total/5
// console.log("Average Marks = " + Avg)

// var per = total /500 * 100
// console.log("Percentage = " + per + "%");

/* ====================Q13====================== */
// var num=Number(window.prompt("Enter Month Number"));
// if(num==4 || num==6 || num==9 || num==11){
//     console.log("Days in Month: 30 ");
// }
// else if(num==2){
//     console.log("Days in Month: 28 or 29");}
// else if(num==1 || num==3 || num==5 || num==7 || num==8 || num==10 || num==12){
//     console.log("Days in Month: 31");
// }else{console.log("sorry");}

/* ====================Q14====================== */
// var mark1=Number(window.prompt("Enter Your Mark Of Physic"));
// var mark2=Number(window.prompt("Enter Your Mark Of Chemistry"));
// var mark3=Number(window.prompt("Enter Your Mark Of Biology"));
// var mark4=Number(window.prompt("Enter Your Mark Of Math"));
// var mark5=Number(window.prompt("Enter Your Mark Of Computer"));

// var total= mark1+mark2+mark3+mark4+mark5

// var per = total /500 * 100
// console.log("Percentage = " + per + "%");

// if(per >= 90 && per<=100)
// {
//     console.log("Grad A")
// }
// else if(per<90 && per>=80){
//     console.log("Grad B")
// }
// else if(per<80 && per>=70){
//     console.log("Grad C")
// }
//  else if(per<70 && per>=60){
//     console.log("Grad D")
// }
// else if(per<60 && per>=40){
//     console.log("Grad E")
// }
// else if(per<40 && per>=0){
//     console.log("Grad F")
// }else{console.log("Enter a Right Mark")}

/*==================================================== SWITCH CASE================================================ */

/* ======================================Q15================================= */
// var num=Number(window.prompt("Enter Month Number"));

// switch (num) {
//     case 4: 
//     case 6:
//     case 9:
//     case 11:        
//     console.log("Days in Month: 30 ");
//     break;

//     case 2: console.log("Days in Month: 28 or 29");
//     break;

//     case 1: 
//     case 3:
//     case 5:
//     case 7:
//     case 8: 
//     case 10:
//     case 12:               
//     console.log("Days in Month: 31 ");
//     break

//     default: console.log("sorry");
// }

/* ======================================Q16================================= */
// var let=window.prompt("Enter Letter");
// switch (let){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     console.log("vowel");
//         break;

//     default: console.log("consonant");
// }

/* ======================================Q17================================= */
// var num1=Number(window.prompt("Enter Number1"));
// var num2=Number(window.prompt("Enter Number2"));
// var result= num1>num2;
// switch (result){
//     case true: console.log(num1); 
//     break;
//     default: console.log(num2);
// }

/* ======================================Q18================================= */
// var num=Number(window.prompt("Enter Number"));
// var result= num % 2 ==0
// switch (result){
//     case true: console.log("even");
//     break;
//     default: console.log("odd");
// }

/* ======================================Q19================================= */

// var num=Number(window.prompt("Enter Number"));
// var result1= num<0 ;
// var result2= num>0 ;
// var zero= num==0
// switch (result1){
//     case true : console.log("negative");
// }
// switch (result2){
//     case true: console.log("positive");
// }
// switch (zero){
//     case true : console.log("zero");
// }

/* ======================================Q20================================= */

var num1=Number(window.prompt("Enter Number1"));
var operator=window.prompt("Enter operator either +, -, * or / ")
var num2=Number(window.prompt("Enter Number2"));
var result;
switch (operator) {
    case "+":
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;

    case '-':
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
        
    case '*':
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
        
    case '/':
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;
        
    default:
    console.log('Invalid operator');
    break;
}
