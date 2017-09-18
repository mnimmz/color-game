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
var pickedColor = colors[3];

//RGB color title at the top
var colorDisplay = document.querySelector("#colorDisplay");

//Displays the name of the current color at the top
colorDisplay.textContent = pickedColor;

//Loops through the color array and changes the color of the rectangles based on the i position
for(var i = 0; i < rectangles.length; i++) {
  //add initial colors to rectangles
  rectangles[i].style.backgroundColor = colors[i];

  //add click listeners to rectangles
  rectangles[i].addEventListener("click", function(){
    //grab color of clicked rectable
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
      alert("Correct!");
    } else {
      this.style.backgroundColor = "#f1f1f1";
    }
    //compare color to pickedColor
  })
}
