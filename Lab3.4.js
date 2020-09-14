
//Lumi Valkyrie Ipema 
//Software Developer MBO4 

const START = 12; //The starting digid is 12. This is a constante and therefore wont ever change.

var Number1 =  prompt("Please submit a number"); //The user is asked to submit a number via a prompt.
Number1 = parseInt(Number1); //ParseInt Turns the prompt from a string into a number.
Number1 = START + Number1; // The outcome from the given calculation above + userinput.

var Number2 =  prompt("Please submit a number"); ///The user is asked to submit a number via a prompt.
Number2 = parseInt(Number2); //ParseInt Turns the prompt from a string into a number.
Number2 = Number1 * Number2; // The outcome from the given calculation above + userinput.

var Number3 =  prompt("Please submit a number"); ///The user is asked to submit a number via a prompt.
Number3 = parseInt(Number3); //ParseInt Turns the prompt from a string into a number.
Number3 = Number2 / Number3; // The outcome from the given calculation above + userinput.

var Number4 =  prompt("Please submit a number"); ///The user is asked to submit a number via a prompt.
Number4 = parseInt(Number4); //ParseInt Turns the prompt from a string into a number.
Number4 = Number3 - Number4; // The outcome from the given calculation above + userinput.

document.write("(" + START + "+" + Number1 + ")" + "x" + Number2+ "/" +Number3+ "-" +Number4+ "=");
document.write(Number4);

