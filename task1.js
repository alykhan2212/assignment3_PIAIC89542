let edu = ["SSC", "HSSC", "BCS", "BS", "BCOM", "MS", "M. Pill", "PhD"];

document.write("<h1>Qualifications</h1>");

for(let index= 0; index < edu.length; index++) {
    document.write( (index + 1) + ") " + edu[index] + "<br>");
}
