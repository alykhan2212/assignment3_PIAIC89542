let aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
let o = ["th","st","nd","rd"];
aCities.pop();
    o.shift();
for(let index= 0; index < aCities.length; index++) {
    document.write((index + 1) + o[index] + " choice is " + aCities[index]);
    document.write("<br>");
}