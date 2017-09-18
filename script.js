alert("Welcome to the RGB Color Picker Game! See if you can match the correct color!")
//Keeps track of which mode the player is in
var numSquares = 6;

//generates random colors
var colors = generateRandomColors(numSquares);

//Color rectangles
var rectangles = document.querySelectorAll(".rectangle");

//RGB current color
var pickedColor = currentColor();

//RGB color title at the top
var colorDisplay = document.querySelector("#colorDisplay");

//header
var h1 = document.querySelector("h1");

//Reset button
var resetButton = document.querySelector("#reset");

//Easy & hard buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  h1.style.backgroundColor = "#f1f1f1";
  numSquares = 4;
  colors = generateRandomColors(numSquares);
  pickedColor = currentColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < rectangles.length; i++){
    if(colors[i]){
      rectangles[i].style.backgroundColor = colors[i];
    } else{
      rectangles[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  h1.style.backgroundColor = "#f1f1f1";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = currentColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < rectangles.length; i++){
      rectangles[i].style.backgroundColor = colors[i];
      rectangles[i].style.display = "inline-block";
  }
});

//Message that displays right or wrong choice
var messageDisplay = document.querySelector("#message");

//Resets the game by generating new colors again
resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = currentColor();
  //change colorDisplay to match currentColor
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < rectangles.length; i++){
    rectangles[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#f1f1f1";
});

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
      resetButton.textContent = "Play Again?";
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
