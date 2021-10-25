// alert ("hello world")


// var number = 100;
// var number2 =200;

// alert (number);
// alert ( number2);

//// STRING VARIABLE/////
// var name = "azalfa" ;
// alert (name)
// var age ="18"
// alert (age)

// opts ///
// var num1 = 30;
// var num2 = 50;

// var add = num1 + num2
// var sub = num1 - num2 
// var mul = num1 * num2
// var div = num1 / num2
// var per = num1 % num2

// alert (add)
// alert (sub)
// alert (mul)
// alert (div)
// alert (per)

// var name = "azalfa"
// var name2 = "riaz"

// document.write(name + name2);

// var name = prompt ("enter your name")
// var age = prompt ("enter your age")
// var number = prompt ("enter your phone number")
// var address = prompt ("enter your address")

// document.write("User Name:" + name)
// document.write("<br> age:" + age)
// document.write("<br> number:" + number)
// document.write("<br> address:" + address)


// var a=10 
// var result = a++ + a + --a - a-- + a++ + a++ - ++a
// alert( result); 
 
alert("MARKSHEET")

var name = prompt ("enter your name")
var fatherName = prompt ("enter your father Name")
var schoolName = prompt ("enter your school name")
var class10 = prompt ("enter your class10")  
var english = + prompt ("enter your english subject number")
var math = + prompt ("enter your math subject number")
var urdu = + prompt ("enter you urdu subject number")
var islamic = + prompt ("enter your islamic subject number")
var science = + prompt ("enter you science subject number")

var obtained_marks= english + math + urdu + islamic + science ; 
var percent = obtained_marks/500* 100;


document.write(" name:" + name);
document.write("<br>fatherName:" + fatherName );
document.write("<br> schoolName" + schoolName); 
document.write ("<br> class10:" +class10);
document.write("<br> english:" + english);
document.write("<br> math:" + math);
document.write("<br> urdu:" + urdu);
document.write("<br> islamic:" + islamic);
document.write("<br> science:" + science);
document.write("<br> obtained mark:" + obtained_marks);  
document.write("</br> percentage:" + percent);
