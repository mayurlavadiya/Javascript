// 1. parentnode & parentElement : child ne laine parent ne target kare

// document.getElementById("child-c").parentElement.style.background = "violet";   
// var a = document.getElementById("child-c").parentElement;

// console.log(a);

// 2. children & ChildNode : parent ne laine child ne target kare

// var a = document.getElementById("inner").children;
// console.log(a); 

// document.getElementById("inner").children[1].style.background = "black";   

// var b = document.getElementById("inner").children[1];
// console.log(b); 

// 3 . Siblings : NextSiblings & PreviousSiblings

// document.getElementById("child-e").previousElementSibling.style.background = "red";   

// var a = document.getElementById("child-e").previousElementSibling; // previousElementSibling
// console.log(a);


// document.getElementById("child-a").nextElementSibling.style.background = "red";   

// var b = document.getElementById("child-a").nextElementSibling; // previousElementSibling
// console.log(b);

// document.getElementById("child-c").nextSibling.style.background = "red";   

// var c = document.getElementById("child-c").nextSibling; // previousElementSibling
// console.log(c);



// create method 1. createElement 2. createTextNode  3. createComment

// tag ne create karva mate 
var newelement = document.createElement("p");

// tex ne create karva mate 
var newtext = document.createTextNode("GOOD_MORNING");

// comment laggavva mate 
// var newcomment = document.createTextNode("This is comment");

// console.log(newelement);
// console.log(newtext);
// console.log(newcomment);

// appenChild : tag ne text sathe attach krva mate --- lastma insert
// insertBefore : kya text add krva chhe ena mate aa use thay --- specified  place pr insert

// insertAdjanceElement : create & appned

// replaceChild : text ne change karva mate
// removeChild : remove karva mate

// cloneNode : node ne copy krine bija node ma paste kri shko ( text )




