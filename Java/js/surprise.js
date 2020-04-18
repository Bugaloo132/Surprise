$(document).ready(function() {

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */

document.getElementById("bluebox").onclick= function() {myFunction()};
    
function myFunction() {
    document.getElementById("redbox").style.zIndex = 2;
}
    
  
    
$(".flash").click(function() {
    $(".white").addClass("new1");
});  
    
$(".flash").click(function() {
    $(".i").addClass("new4");
});
    
$(".flash").click(function() {
    $(".am").addClass("new2");
}); 
    
$(".flash").click(function() {
    $(".blind").addClass("new3");
});
    
    
    
 $(".flash").click(function() {
    $(".dot1").addClass("opac2");
});   
    
    $(".flash").click(function() {
    $(".dot2").addClass("opac2");
});  
    
  $(".flash").click(function() {
    $(".dot3").addClass("opac1");
});    
   
 $(".flash").click(function() {
    $(".dot4").addClass("opac2");
});     
    
  $(".flash").click(function() {
    $(".dot5").addClass("opac2");
});    
    
    $(".flash").click(function() {
    $(".dot6").addClass("opac1");
});     
    
      $(".flash").click(function() {
    $(".dot7").addClass("opac2");
});   
    

    
    
    
    
    
    
    
    
    
    
    
    
    
 });