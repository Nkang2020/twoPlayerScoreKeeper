$(document).ready(function(){
  var num2 = 0;
  var num1 = 0;
  $("#p2plus5").click(function(){
    num2 +=5;
    $("#score2").html(num2);
  });
   $("#p2minus5").click(function(){
    num2 -=5;
    $("#score2").html(num2);
  });
  
  $("#p1plus5").click(function(){
    num1 +=5;
    $("#score1").html(num1);
  });
   $("#p1minus5").click(function(){
    num1 -=5;
    $("#score1").html(num1);
  });
});