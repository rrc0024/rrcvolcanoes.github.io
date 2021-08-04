
var correctList = document.getElementsByClassName("correct");
var incorrectList = document.getElementsByClassName("incorrect");
var firstCorrect = document.getElementById("onecorrect");
var firstCorrectMsg = document.getElementById("firstCorrectMsg");

var onButtonClick = function(){
  firstCorrect.style.color = "green";
};
correctList.addEventListener("click", onButtonClick);

if firstCorrect.style.color = "green" {
  firstCorrectMsg.style.visibility = "hidden";
}
  
