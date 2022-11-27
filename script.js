/** @format */

"use strict";
let points = 0;

import { countDown } from "./timer.js";
//import {StoreFinalScore} from "./localStorage.js";
import { printWelcomeMessage } from "./localStorage.js";
import { StoreFinalScore } from "./fireBase.js";

printWelcomeMessage();
//Function gets data from the API
async function getData(character) {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await res.json();
  //generating a random number
  let randomNumber = Math.floor(Math.random() * 52);
  console.log(randomNumber);
  //accessing that randomly generated number(index in the array) to print a random pic
  let randomCharacter = data[randomNumber].imageUrl;
  console.log(data);
  console.log(randomCharacter);
  let Random = document.getElementById("RandomPicture");
  Random.src = randomCharacter;

  //checking the response
  let firstName = data[randomNumber].firstName;
  //console.log(firstName);

  //save the response of the submit from
  let form2 = document.getElementById("respond");
  form2.onsubmit = function (event) {
    event.preventDefault();
    console.log(form2.elements.response.value);
    let userInput = form2.elements.response.value;
    //game rules
    console.log(firstName);

    //converting both the user input and API into strings as well
    if (firstName.toLowerCase() === userInput.toLowerCase()) {
      form2.elements.response.value = "";
      let randomNumber2 = Math.floor(Math.random() * 52);
      console.log(randomNumber2);
      randomCharacter = data[randomNumber2].imageUrl;
      Random = document.getElementById("RandomPicture");
      Random.src = randomCharacter;
      form2.elements.response.value = "";
      firstName = data[randomNumber2].firstName;
      points += 1;
      console.log(points);
      //storing the final score in the localStorage.js

      let finalScoreMessage = document.getElementById("finalScore");
      finalScoreMessage.innerHTML = "Final Score : " + points;

      //access the the user name
      let form1 = document.getElementById("gamerName");
      let userName = form1.elements.name.value;
      StoreFinalScore(userName, points);
    } else form2.elements.response.value = "";
    let randomNumber3 = Math.floor(Math.random() * 52);
    console.log(randomNumber3);
    randomCharacter = data[randomNumber3].imageUrl;
    Random = document.getElementById("RandomPicture");
    Random.src = randomCharacter;
    form2.elements.response.value = "";
    firstName = data[randomNumber3].firstName;
  };
}

getData();

//when replay button is clicked, the game will restart
let refresh = document.getElementById("replay");
refresh.addEventListener("click", refreshPage);
function refreshPage() {
  location.reload();
}

//start button
let button = document.getElementById("startButton");
button.addEventListener("click", Start);
//the function 'Start' makes the next state of the game visible
function Start() {
  document.getElementById("state1").style.display = "none";
  document.getElementById("state2").style.display = "flex";
  //calling the function to start counting down
  countDown();

  /*store points in local storage
localStorage.setItem("finalScore", points);
let pointsArray= localStorage.getItem("finalScore");  */
}

//state1
document.getElementById("state1").style.display = "flex";
document.getElementById("state2").style.display = "none";
document.getElementById("state3").style.display = "none";
document.getElementById("startButton").style.display = "none";
document.getElementById("timer").style.display = "none";

//copyright notice
let date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;
