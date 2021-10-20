function RollSixSidedDice() {
    //collects two dice roll results
    roll1 = Math.floor(Math.random()*6) + 1;
    roll2 = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice").value = roll1;
    document.getElementById("dice2").value = roll2;
    //If/else statement checks for matches.
    if (roll1  == roll2) {
        document.getElementById("match").value = "Match!";
        } 
    else {
        document.getElementById("match").value = "Not a Match! :(";
        }
}
function SendHelp() {
    help = "Click the 'Toss Dice' button"
    document.getElementById("help").value = help;
}
