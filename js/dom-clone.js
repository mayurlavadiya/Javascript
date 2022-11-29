var target = document.getElementById("id1").children[1];

var copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("id2").appendChild(copyElement);


/* DOM contains() method
 jo eni pase contain hse to TRUE baki FAlSE

*/



// hashAttribute() & hashChildNode()



/* 
    isEqualNode() : return true or false after checking the nodes from two tag
    criteria
    1. same Nodename
    2. same Nodevalue
    3. same childNode
    4. same attribute : class = class
    5. same attributes value
*/



/*   FORM EVENTS 

  keydown , keypress , key up
  focus , blur , input
  change , select , submit , invalid

*/

