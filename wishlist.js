"use strict";


window.onload = function setUp() {
  var butid = document.querySelectorAll("#b1", "#b2", "#b3", "#b4");
   butid.onclick = addItem(); //onclick event to run addItem function
   }; //end of setUp function

   var butid = document.querySelectorAll("#b1", "#b2", "#b3", "#b4");
   var tabid = document.getElementById('wish'); 
   
 function addItem(e) {
   tabid.innerHTML= e.target.innerHTML; //event listner to copy elements to table
   
   for(var i=0;butid.length;i++); {
   butid[i].addEventListener("click", run);
 };  //end of for loop
   

}; //end of addItem function
 
