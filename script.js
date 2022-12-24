"use strict"; //https://www.w3schools.com/js/js_strict.asp
const button = document.getElementById("color-changer");
const colorName = document.getElementById("color-name");
const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// Created an containing the all possible values of a HEX color array
let colorValue = ""; //Created an empty string
let randomColor = ["#"]; //Created an array with # value at index 0
let randonNum; //Created a variable

/*
Added event listener to the button which is waiting for the click event,
created a callback function 
initiated a while loop which executes till the length of random color array is less than 7 (array are 0 based index in JS, so we get 6 random index elemets from the array)  
using array.push method to push the random values in the randomColor array
used the array.join method to conver the randomColor array to a string and stored the vale in the colorValue variable

now changed the body color by using body.style = colorValue
also changed the text content of colorName = colorValue


after that reset the randomColor array value

*/

button.addEventListener("click", () => {
  while (randomColor.length < 7) {
    randonNum = Math.floor(Math.random() * 16);
    randomColor.push(colorArr[randonNum]);
    // console.log(randomColor);
    colorValue = randomColor.join("");
    document.body.style.backgroundColor = colorValue;
    colorName.textContent = colorValue;
  }
  randomColor = ["#"];
});
