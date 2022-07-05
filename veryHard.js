let months = ["January", "February", "March"," April", "May", "June","July","August","September","October","November","December"];

let numMonth = 3; numMonth--;

if (numMonth < 12 && numMonth >= 0){
    console.log(`Month number ${numMonth + 1} is ${months[numMonth]}`);
} else {
    console.log("Try again.")
}