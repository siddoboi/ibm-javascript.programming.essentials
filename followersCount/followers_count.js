let count = 0; //Initialize count to 0

function IncreaseCount() {
    count++; //Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the counnt in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram account gained 10 followers! Congratulations");
    } else if (count === 20) {
        alert("Your Instagram account gained 20 followers! Keep it up!");
    }
}

function ResetCount() {
    let count = 0;
    alert("Your followers has been reset");
}