"use client";
import { frageAntwort } from "@/app/components/quiz/qa";
let totalPoints = frageAntwort.length;

const questionsAnswers = frageAntwort.map((item, index1) => (
	<li className="border-primary border-b py-4" key={index1.toString()}>
		{item.question} <br />
		{item.options.map((option, index2) => (
			<div key={index2}>
				<input
					type="radio"
					id={`button-${index1}-${index2}`}
					name={`option-${index1}`}
				/>
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

	let submitButton = document.getElementById("submit-button")!;
	submitButton.setAttribute("hidden", "hidden");

	let resultPicture = CanvasResult(userPoints);
	const canvas = document.getElementById("resultPainting");
	canvas!.removeAttribute("hidden");
}

function Evaluation() {
	let userPoints = 0;

	for (let i = 0; i < frageAntwort.length; i++) {
		let solution = frageAntwort[i].answer;
		// because some questions have multiple correct options:
		const selectedOptions = Array.isArray(solution) ? solution : [solution];

		for (const answer of selectedOptions) {
			const currentButton = document.getElementById(
				`button-${i}-${answer}`
			) as HTMLInputElement;
			if (currentButton && currentButton.checked == true) {
				userPoints++;
			}
		}
	}
	return userPoints;
}

function CanvasResult(points: number) {
	const canvas = document.getElementById(
		"resultPainting"
	) as HTMLCanvasElement;
	const ctx = canvas.getContext("2d");
	ctx!.fillStyle = "white";
	ctx!.fillRect(0, 0, 800, 450);
	ctx!.strokeRect(5, 5, 790, 440);
	return <canvas></canvas>;
}

export default function Quizmaster() {
	return (
		<div>
			<form id="submit-button">
				<ul>{questionsAnswers}</ul>
				<button type="button" onClick={Result}>
					Submit
				</button>
			</form>
			<p id="result" hidden></p>
			<canvas
				id="resultPainting"
				width="800"
				height="450"
				hidden
			></canvas>
		</div>
	);
}
