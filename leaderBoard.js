/** @format */
"use strict";
import { RetrieveFinalScore } from "./fireBase.js";

export function CodedLeaderBoard(
	oldScoreDataFromFirebase
) {
	let scoreTable =
		document.getElementById(
			"scoreTable"
		);

	// Loop through the data from the firebase and create a new row for each item
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

			/*
			//Create a row with two columns
			const row =
				document.createElement("tr");
			tableBody.appendChild(row);
			const cell1 =
				document.createElement("td");
			const cell2 =
				document.createElement("td");
			tableBody.row.appendChild(cell1);
			tableBody.row.appendChild(cell2);

			//Access data from the firebase
			let newRow = doc.data();

			//  Insert the data from the firebase into the table
			cell1.innerHTML = newRow.name;
			cell2.innerHTML =
				newRow.finalScore; */
		}
	);
}
