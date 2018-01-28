//////////////////////////////////////////////////////////////button1 = GROW
////v1
//document.getElementById("button1").addEventListener("click", function(){
//
    //document.getElementById("box").style.height = "250px";
    //document.getElementById("box").style.width = "250px";
//
//});

counter = 1             ///must be outside function otherwise doesn't move past first condition
function growclick() {     
    if (counter == 1) {
        document.getElementById("box").style.height = "250px";
        document.getElementById("box").style.width = "250px";
        counter = counter + 1
        return;
    }
    if (counter == 2) {
        document.getElementById("box").style.height = "350px";
        document.getElementById("box").style.width = "350px";
        counter = counter + 1
        return;
    }
    if (counter == 3) {
        document.getElementById("box").style.height = "450px";
        document.getElementById("box").style.width = "450px";  
        return; 
}
}

//////////////////////////////////////////////////////////////button2 = BLUE
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
});




//////////////////////////////////////////////////////////////button3 = FADE

////v1
//document.getElementById("button3").addEventListener("click", function(){

//    document.getElementById("box").style.opacity = "0.75";
//});

function fadeclick() {
  var opac = document.getElementById("box").style.opacity;  //moved inside function. outside left fade button broken after reset
  if (opac > 0) {                                           //was using while but if works
    opac = opac - 0.1
    document.getElementById("box").style.opacity = opac
    return;
  }
}

////v2-doesn't fade past 0.5
// function fadeclick() {
//  if (document.getElementById("box").style.opacity == "1") {
//    document.getElementById("box").style.opacity = "0.75";
//  } else if (document.getElementById("box").style.opacity == "0.75") {
//      document.getElementById("box").style.opacity = "0.50"; 
//  } else if (document.getElementById("box").style.opacity == "0.50") {
//      document.getElementById("box").style.opacity = "0.25";
//  } else if (document.getElementById("box").style.opacity == "0.25") {
//      document.getElementById("box").style.opacity = "0";
//  }
//}




//////////////////////////////////////////////////////////////button4 = RESET

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";    
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    //var opac = document.getElementById("box").style.opacity;  //attempted fix for fade/reset, see fadeclick()
    //var opac = 1                                              //attempted fix for fade/reset, see fadeclick()
    document.getElementById("box").style.cursor = "default";

});




//////////////////////////////////////////////////////////////button5 = CURSOR

document.getElementById("button5").addEventListener("click", function (){
  
  document.getElementById("box").style.cursor = "crosshair";
  
});

function cursorclick() {
    document.getElementById("button5").style.cursor = "wait";
}

function mOver(obj) {
    document.getElementById("button5").style.cursor = "progress";
}

//cursor attempt with .getElementById
//document.getElementById("button5").addEventListener("click", function cursorclick() {
//  
//    document.getElementById("button5").style.cursor = "wait";
//    
//});




//////////////////////////////////////////////////////////////button6 = BRIGHTEN

////v1
//document.getElementById("button6").addEventListener("click", function(){

 //   document.getElementById("box").style.opacity = "1"
//});

function brightclick() {
    var opac = document.getElementById("box").style.opacity; 
    if (opac <= 1) {
        document.getElementById("box").style.opacity = opac - -0.1 ///can only use subtraction, adding as minus negative
        return;
    }
}




//////////////////////////////////////////////////////////////button7 = R

document.getElementById("button7").addEventListener("click", function(){
  
  document.getElementById("box").style.backgroundColor = "rgb(100,0,0)"
});




//////////////////////////////////////////////////////////////button8 = G

document.getElementById("button8").addEventListener("click", function(){
  
  document.getElementById("box").style.backgroundColor = "rgb(0,100,0)"
});




////////////////////////////////////////////////////////////// button9 = B

document.getElementById("button9").addEventListener("click", function(){
  
  document.getElementById("box").style.backgroundColor = "rgb(0,0,100)"
});