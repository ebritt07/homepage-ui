// greeting.js

function getGreeting() {
    let date = new Date();
    let hour = date.getHours();
    let greeting;
    
    if (hour >= 0 && hour < 12) {
      greeting = "Top of the morning";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    
    return greeting;
  }
  
  window.onload = function() {
    let greeting = getGreeting();
    document.getElementById("greeting").innerHTML = greeting;
  };