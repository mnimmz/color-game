//Keeps track of which mode the player is in
var numRectangles = 6;

//generates random colors
var colors = [];

//RGB current color
var pickedColor;

//Color rectangles
var rectangles = document.querySelectorAll(".rectangle");

//RGB color title at the top
var colorDisplay = document.querySelector("#colorDisplay");

//Message that displays right or wrong choice
var messageDisplay = document.querySelector("#message");

//header
var h1 = document.querySelector("h1");

//Reset button
var resetButton = document.querySelector("#reset");

//Easy & hard buttons
var modeButtons = document.querySelectorAll(".gameMode");

init();

function init(){
  setupModeButtons();
  seupRectangles();
  reset();
}

//mode buttons event listeners
function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numRectangles = 4;
      } else{
        numRectangles = 6;
      }
      reset();
    });
  }
}

//Loops through the color array and changes the color of the rectangles based on the i position
function seupRectangles(){
  for(var i = 0; i < rectangles.length; i++){

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
        this.style.backgroundColor = "#403F4C";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//Easy and hard buttons reset the colors and changes the amount of rectangles
function reset(){
  //generate all new colors
  colors = generateRandomColors(numRectangles);
  //pick a new random color from array
  pickedColor = currentColor();
  //change colorDisplay to match currentColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i < rectangles.length; i++){
    if(colors[i]){
      rectangles[i].style.display = "inline-block";
      rectangles[i].style.backgroundColor = colors[i];
    } else{
      rectangles[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "#06AED5";
}

//Resets the game by generating new colors again
resetButton.addEventListener("click", function(){
  reset();
});

//Displays the name of the current color at the top
colorDisplay.textContent = pickedColor;



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
