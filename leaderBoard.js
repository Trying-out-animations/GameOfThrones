/** @format */
"use strict";

export function CodedLeaderBoard(
	oldScoreDataFromFirebase
) {
	let scoreTable =
		document.getElementById(
			"scoreTable"
		);

	// Loop through the data from the firebase.
	oldScoreDataFromFirebase.forEach(
		(doc) => {
			console.log(doc.data());

			//Access data from the firebase
			let newRow = doc.data();

			// Create a new table row
			let row1 = scoreTable.insertRow(
				scoreTable.rows.length
			);
			let cellOne = row1.insertCell(0);
			let cellTwo = row1.insertCell(1);
			cellOne.innerHTML = newRow.name;
			cellTwo.innerHTML =
				newRow.finalScore;
		}
	);
}
