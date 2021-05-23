var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) +1;
var randomDiceImage= "images/dice" + randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) +1;
var randomDiceImage2= "images/dice" + randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="😢Draw!😢";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
