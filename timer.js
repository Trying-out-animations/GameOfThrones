// Creating and exporting the Timer here!

export function countDown(){
    let Timer=document.getElementById("timer");
    //Printing the current time 
    let currentTime=new Date();
    Timer.innerHTML=currentTime;
     
    //get the time that we want to keep counting until
    function getFutureTime(date, minutes) {
      return new Date(date.getTime() + minutes*60000);
    }
    let futureTime=getFutureTime(currentTime, 0.5);
    
    // Set the date we're counting down to
    let countDownDate = futureTime.getTime();
    
    // Update the count down every 1 second
    let x = setInterval(function() {
    
      // Get today's date and time
      let now = new Date().getTime();
    
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
       // Display the result in the element with id="clock"
       document.getElementById("clock").innerHTML =  minutes + "m " + seconds + "s ";
     
       // If the count down is finished, go to the next state of the game
       if (distance < 0) {
         clearInterval(x);
    document.getElementById("state2").style.display = "none";
    document.getElementById("state3").style.display = "block";
       }
    }, 1000);
  }
  