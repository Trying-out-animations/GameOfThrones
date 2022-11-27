/** @format */

//let form = document.getElementById("gamerName");
// let name = form.elements.name.value;
//saves the new high score in the local storage
/*export function StoreFinalScore(points){
if (points > localStorage.getItem("finalScore")) {
  //localStorage.setItem("finalScore", points);
  localStorage.setItem("finalScore", JSON.stringify(points)); 

  //instead of the normal score message, this types a special highest score message
  let newHighestScoreMessage=document.getElementById("finalScore");
  newHighestScoreMessage.innerHTML =  ", You have a new highest score of : " + points+ " points! ";
}
    } */

export function printWelcomeMessage() {
  //gamer name submit form
  let form = document.getElementById("gamerName");
  form.onsubmit = function (event) {
    event.preventDefault();
    let name = form.elements.name.value;

    // welcome message to the player
    document.getElementById("welcomeMsg").innerHTML =
      "Hello " + name + ", Good luck!";
    document.getElementById("gamerName").style.display = "none";
    document.getElementById("startButton").style.display = "flex";
  };
}
