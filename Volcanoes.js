
var correctList = document.getElementsByClassName("correct");
var incorrectList = document.getElementsByClassName("incorrect");
var firstCorrect = document.getElementById("onecorrect");

var onButtonClick = function(){
  firstCorrect.style.color = "green";
};
correctList.addEventListener("click", onButtonClick);
