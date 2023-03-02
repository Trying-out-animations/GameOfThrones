/** @format */
"use strict";
import { CodedLeaderBoard } from "./leaderBoard.js";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:
		"AIzaSyBbUaqUybXj6OITP3gEOBiz0i-J8Wz3CY8",
	authDomain:
		"guest-book-3b183.firebaseapp.com",
	projectId: "guest-book-3b183",
	storageBucket:
		"guest-book-3b183.appspot.com",
	messagingSenderId: "1036121336282",
	appId:
		"1:1036121336282:web:87bd6465471755fb6d38e3",
};
// Initialize Firebase
const app = firebase.initializeApp(
	firebaseConfig
);
const APIGame = firebase.firestore();

const finalScoreEl =
	document.getElementById("finalScore");
//const gamerNameEl = document.getElementById("gamerName")
let form1 = document.getElementById(
	"gamerName"
);
let userName =
	form1.elements.name.value;
let scoreList = [];

//A function to print the final score
export async function StoreFinalScore(
	userName,
	points
) {
	await APIGame.collection(
		"APIgame"
	).add({
		name: userName,
		finalScore: Number(points),
		// gets the current time
		created: new Date(),
	});
}

//Fetch data from firebase
export async function RetrieveFinalScore() {
	const oldScoreDataFromFirebase =
		await APIGame.collection("APIgame")
			//get the highest 3 scores in descending order
			.orderBy("finalScore", "desc")
			.limit(3)
			.get();

	oldScoreDataFromFirebase.forEach(
		(doc) => {
			console.log(doc.data());
		}
	);

	CodedLeaderBoard(
		oldScoreDataFromFirebase
	);
}
