"use client";
import { frageAntwort } from "@/app/components/quiz/qa";
let totalPoints = frageAntwort.length;

const questionsAnswers = frageAntwort.map((item, index1) => (
	<li className="" key={index1.toString()}>
		{item.question} <br />
		{item.options.map((option, index2) => (
			<div key={index2}>
				<input type="radio" id={`button-${index1}-${index2}`} name={`option-${index1}`} />
				<label htmlFor={index2.toString()}>{option}</label>
			</div>
		))}
	</li>
));

function Result() {
	let userPoints = Evaluation();
	let result = document.getElementById("result")!;
	result.innerHTML = `You scored ${userPoints} out of ${totalPoints} points!`;
	result.removeAttribute("hidden");
}

function Evaluation() {
	let userPoints = 0;

	for (let i = 0; i < frageAntwort.length; i++) {
		let solution = frageAntwort[i].answer;
		const currentButton = document.getElementById(`button-${i}-${solution}`) as HTMLInputElement;
		if (currentButton.checked == true) {
			userPoints++;
		}
	}
	return userPoints;
}

export default function Quizmaster() {
	return (
		<div>
			<form>
				<ul>{questionsAnswers}</ul>
				<button type="button" onClick={Result}>
					Submit
				</button>
			</form>
			<p id="result" hidden></p>
		</div>
	);
}
