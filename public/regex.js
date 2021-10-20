//Author: Joel Feddes


//Function determines if user text matches regex expression
function TestInput() {
    //get text user provided for regex
    const regexText = RegExp(document.getElementById("regexText").value);

    //get text user provided to test with
    const userText = document.getElementById("userText").value;

    //test to see if the user test text can be handled by regex
    document.getElementById("checkMatch").value = regexText.test(userText);
}
function SendHelp() {
    help = "Input a regular expression in the first box and text to test against the expression in the second box. Ex. First box input: fo* Second box input: foo will return True.";
    document.getElementById("help").value = help;
}