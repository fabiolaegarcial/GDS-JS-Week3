console.log('Medium: Call the function speaking().');

function speaking(){
    var userInput = prompt("SHOUT, whisper, Or Talk Normally:");
    var isUpper = userInput.toUpperCase() === userInput;
    var isLower = userInput.toLowerCase() === userInput;
    
    if (isLower === true){
        console.log(`you were whispering`);
    } else  if (isUpper === true){
        console.log(`YOU WERE SHOUTING!`);
    } else {
        console.log(`You were speaking normally.`);
    }
}