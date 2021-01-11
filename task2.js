let stdNames = ["Micheal", "John", "Tony"];
let stdScores = [320, 230, 480];
let total = 500;
for(let index = 0; index < stdNames.length; index++) {

    document.write("Score of " + stdNames[index] + " is " + stdScores[index] + ". Percentage: " + (parseInt((stdScores[index]*100) / total)) + "%<br>");

}