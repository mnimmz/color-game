//generates random colors
var colors = generateRandomColors(6);

//Color rectangles
var rectangles = document.querySelectorAll(".rectangle");

//RGB current color
var pickedColor = currentColor();

//RGB color title at the top
var colorDisplay = document.querySelector("#colorDisplay");

//header
var h1 = document.querySelector("h1");

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
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#f1f1f1";
      messageDisplay.textContent = "Try Again";
    }
  });
}

//changes colors of all rectangles to correct color
function changeColors(color) {
  //loop through all rectangles
  for(var i = 0; i < rectangles.length; i++){
    //change each color to match given color
    rectangles[i].style.backgroundColor = color;
  }
}

//Picks a random color from the colors array by using a random number based on the length of the array
function currentColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//stores randomColor inside array(arr)
function generateRandomColors(num){
  //make an array
  var arr = []
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array (arr)
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

//generates random colors
function randomColor(){
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
