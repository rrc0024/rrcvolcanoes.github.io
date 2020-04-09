
var correctList = document.getElementsByClassName("correct");

var x;
for (x in correctList) {
  if (x.mouseDown && x.mouseOver) {
    x.style.color = "green";

  }

}
