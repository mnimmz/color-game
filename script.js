//random colors
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

//Color rectangles
var rectangles = document.querySelectorAll(".rectangle");

//RGB current color
var pickedColor = currentColor();

//RGB color title at the top
var colorDisplay = document.querySelector("#colorDisplay");

//Message that displays right or wrong choice
var messageDisplay = document.querySelector("#message");

//Displays the name of the current color at the top
colorDisplay.textContent = pickedColor;

//Loops through the color array and changes the color of the rectangles based on the i position
for(var i = 0; i < rectangles.length; i++){
  //add initial colors to rectangles
  rectangles[i].style.backgroundColor = colors[i];

  //add click listeners to rectangles
  rectangles[i].addEventListener("click", function(){
    //grab color of clicked rectable
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#f1f1f1";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all rectangles
  for(var i = 0; i < rectangles.length; i++){
    //change each color to match given color
    rectangles[i].style.backgroundColor = color;
  }
}

function currentColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
