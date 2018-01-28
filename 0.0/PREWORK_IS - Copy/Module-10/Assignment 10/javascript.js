//BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW - BUTTON 1 - GROW
////v1
/*document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});
*/

var counter = 1;             ///must be outside function otherwise counter will always =1 and won't move past first condition
function growclick() {     
    if (counter == 1) {
        document.getElementById("box").style.height = "250px";
        document.getElementById("box").style.width = "250px";
        counter++
        return;
    }
    if (counter == 2) {
        document.getElementById("box").style.height = "350px";
        document.getElementById("box").style.width = "350px";
        counter++
        return;
    }
    if (counter == 3) {
        document.getElementById("box").style.height = "450px";
        document.getElementById("box").style.width = "450px";  
        return; 
    }
}




//BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE - BUTTON 2 - BLUE 
////v1
/*
document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("box").style.backgroundColor = "blue";
});

////v2-onclick function attempt
function blueclick() {
    if (document.getElementById("box").style.backgroundColor = "orange") {
        document.getElementById("box").style.backgroundColor = "blue";
        return;
    }
}
*/

var counter2 = 1;    
document.getElementById("button2").addEventListener("click", function(){
    if (counter2 == 1) {
        document.getElementById("box").style.backgroundColor = "lightblue";
        counter2++
        return;
    } else if (document.getElementById("box").style.backgroundColor == "lightblue") {
        document.getElementById("box").style.backgroundColor = "blue";
       // counter2 = counter2 + 1
        return;
    } else if (document.getElementById("box").style.backgroundColor == "blue") {
        document.getElementById("box").style.backgroundColor = "navy";
        return;
    } else {
        document.getElementById("box").style.backgroundColor = "lightblue"
    }
});




//BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE - BUTTON 3 - FADE
/*
////v1
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.75";
});
////v2-doesn't fade past 0.5
 function fadeclick() {
  if (document.getElementById("box").style.opacity == "1") {
    document.getElementById("box").style.opacity = "0.75";
  } else if (document.getElementById("box").style.opacity == "0.75") {
      document.getElementById("box").style.opacity = "0.50"; 
  } else if (document.getElementById("box").style.opacity == "0.50") {
      document.getElementById("box").style.opacity = "0.25";
  } else if (document.getElementById("box").style.opacity == "0.25") {
      document.getElementById("box").style.opacity = "0";
  }
}
*/

function fadeclick() {
  var opac = document.getElementById("box").style.opacity;  //moved inside function. outside left fade button broken after reset
  while (opac > 0) {                                           //both if and while work
    opac = opac - 0.1
    document.getElementById("box").style.opacity = opac
    return;
  }
}




//BUTTON 6 - BRIGHTEN - BUTTON 6 - BRIGHTEN - BUTTON 6 - BRIGHTEN - BUTTON 6 - BRIGHTEN - BUTTON 6 - BRIGHTEN - BUTTON 6 - BRIGHTEN
/*
////v1 aka reset
document.getElementById("button6").addEventListener("click", function(){

   document.getElementById("box").style.opacity = "1"
});
*/

function brightclick() {
    var opac = document.getElementById("box").style.opacity; 
    if (opac <= 1) {
        document.getElementById("box").style.opacity = opac - -0.1 ///can only use subtraction, adding as minus negative
        return;
    }
}




//BUTTON 5 - CURSOR - BUTTON 5 - CURSOR - BUTTON 5 - CURSOR - BUTTON 5 - CURSOR - BUTTON 5 - CURSOR - BUTTON 5 - CURSOR - BUTTON 5 - CURSOR
/*
////cursor attempt with .getElementById
document.getElementById("button5").addEventListener("click", function cursorclick() {
  
    document.getElementById("button5").style.cursor = "wait";
    
});

////v1
document.getElementById("button5").addEventListener("click", function (){
  
  document.getElementById("box").style.cursor = "crosshair";
  
});
function cursorclick() {
    document.getElementById("button5").style.cursor = "wait";
}

function mOver(obj) {
    document.getElementById("button5").style.cursor = "progress";
}
*/

counter3 = 1;
function cursorclick() {
    
    if (counter3 == 1) {
        document.getElementById("box").style.cursor = "crosshair";
        counter3++
        return;
    } else if (counter3 == 2) {
        document.getElementById("box").style.cursor = "wait";
        counter3++
        return;
    } else if (counter3 == 3) {
        document.getElementById("box").style.cursor = "none";
        counter3++
        return;
    } else {
        document.getElementById("box").style.cursor = "default";
        counter3 = 1
        return;
    }
}

function mOver(obj) {
    document.getElementById("button5").style.cursor = "progress";
}




//BUTTON 4 - RESET - BUTTON 4 - RESET - BUTTON 4 - RESET - BUTTON 4 - RESET - BUTTON 4 - RESET - BUTTON 4 - RESET - BUTTON 4 - RESET
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";    
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    //var opac = document.getElementById("box").style.opacity;  //attempted fix for fade/reset, see fadeclick()
    //var opac = 1                                              //attempted fix for fade/reset, see fadeclick()
    document.getElementById("box").style.cursor = "default";
    counter = 1
    counter2 = 1 
    counter3 = 1

});




/*
//BUTTON7 - R

document.getElementById("button7").addEventListener("click", function(){
var r = 100;  
    document.getElementById("box").style.backgroundColor = "rgb(r,0,0)";
 
});

//BUTTON 8 - G

document.getElementById("button8").addEventListener("click", function(){
  
  document.getElementById("box").style.backgroundColor = "rgb(0,100,0)"
});

//BUTTON 9 - B

document.getElementById("button9").addEventListener("click", function(){
  
  document.getElementById("box").style.backgroundColor = "rgb(0,0,100)"
});
*/