// Getting the reference to the audio and startButton element
const startSound = document.getElementById("startSound");
const startButton = document.getElementById("startButton");

//Add event listener that plays the startSound when startButton is clicked
startButton.addEventListener("click", function() {
  startSound.play();
});

// Set the initial countdown to 25 minutes
var count = 1500;

// Create a flag to track whether the timer is running
var timerRunning = false;

// Create a variable to store the setInterval function
var countdown;


function startTimer() {
    // Check if the timer is already running
    if (timerRunning) {
      return;
    }
  
    // Get the value entered by the user
    var timeInput = document.getElementById("timeInput").value;
  
    // Check if the value is a number
    if (!/^\d+$/.test(timeInput)) {
      alert("Please enter a valid number, don't add numbers greater than 60 minutes, characters, symbols, just numbers from 1 to 60.");
      return;
    }
  
    // Convert the value to an integer
    var timeInMinutes = parseInt(timeInput);

    // Check if the value is greater than 60
    if (timeInMinutes > 60) {
        alert("The maximum time is 60 minutes. Only input minutes within the range of 1-60.");
        return;
    }
  
    // Convert the time in minutes to seconds
    count = timeInMinutes * 60;
  
    // Update the timer display
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
  
    // Update the count down every 1 second
    countdown = setInterval(function() {
      // If the count down is over
      if (count < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "00:00";
      } else {
        // Calculate the minutes and seconds
        minutes = Math.floor(count / 60);
        seconds = count % 60;
  
        // Add leading zeros if necessary
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
  
        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
  
        // Decrement the count by 1
        count--;
      }
    }, 1000);
  
    // Set the timerRunning flag to true
    timerRunning = true;
  
    // Disable the start button
    document.getElementById("startButton").disabled = true;
}

function resetTimer() {
  // Clear the setInterval function
  clearInterval(countdown);

  // Set the count to the initial value
  count = 1500;

  // Update the timer display
  document.getElementById("timer").innerHTML = "25:00";

  // Set the timerRunning flag to false
  timerRunning = false;

  // Enable the start button
  document.getElementById("startButton").disabled = false;
}


function addTodo() {
    // Get the value of the input element
    var todoInput = document.getElementById("todoInput").value;
  
    // Create a new list item
    var todoItem = document.createElement("li");
    todoItem.innerHTML = todoInput;
  
    // Create a button to remove the item from the list
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function() {
      todoItem.parentNode.removeChild(todoItem);
    };
  
    // Add the button to the list item
    todoItem.appendChild(removeButton);
  
    // Add the list item to the unordered list
    document.getElementById("todoList").appendChild(todoItem);
  
    // Clear the input element
    document.getElementById("todoInput").value = "";
}

