// **********index.js**********

// useful string properties & methods

var myName = "Bro Code";
var myStreet = "123 Fake st.";
var myCity ="Nowhere XY 12345";
var myPhone = "123-456-7890"
console.log(myName.length);
console.log(myName.charAt(0)); // convert string to char 
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("o"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//var firstName = myName.slice(0,3);
var firstName = myName.slice(0,myName.indexOf(" "));
console.log(firstName);

//var lastName = myName.slice(4);
var lastName = myName.slice(myName.lastIndexOf(" ")+1);
console.log(lastName);

var myAddress = myStreet.concat(" ",myCity);
console.log(myAddress);

myPhone =myPhone.replaceAll("-",",");
console.log(myPhone);


