let colorNames = ["blue", "purple", "white" , "magenda"];
document.write(colorNames + "<br>");

// Ask the user what color he/she wants to add to the beginning
let newcolorAtStart = prompt("Enter the color you want to add at the beginning");
colorNames.unshift(newcolorAtStart);
document.write(colorNames + "<br>");

// Ask the user what color he/she wants to add to the end & add
let newColorAtEnd = prompt("Enter the color you want to add at the end");
colorNames.push(newColorAtEnd);
document.write(colorNames + "<br>");

// Add two more colors to the beginning of the array
colorNames.unshift("black", "green");
document.write(colorNames + "<br>");

// Delete the first color in the array
colorNames.shift();
document.write(colorNames + "<br>");

// Delete the last color in the array
colorNames.pop();
document.write(colorNames + "<br>");

// Ask the user at which index he/she wants to add a color & color name.
let addIndex = prompt("Enter the index you want to add new color");
let addColor = prompt("Enter the color name");

colorNames.splice(addIndex, 0, addColor);
document.write(colorNames + "<br>");

// Ask the user at which index he/she wants to delete color(s) &
// how many colors he/she wants to delete
let deleteIndex = prompt("At which index you want to delete colors?");
let noOfIndex = prompt("How many colors you want to delete?");

colorNames.splice(deleteIndex, noOfIndex);
document.write(colorNames + "<br>");