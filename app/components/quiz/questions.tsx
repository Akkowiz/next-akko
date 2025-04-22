"use client";
import { frageAntwort } from "@/app/components/quiz/qa";
import A from "@/app/images/grades/A.png";
import B from "@/app/images/grades/B.png";
import C from "@/app/images/grades/C.png";
import D from "@/app/images/grades/D.png";
import S from "@/app/images/grades/S.png";
import SS from "@/app/images/grades/SS.png";
import SSS from "@/app/images/grades/SSS.png";

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
	let [userPoints, Grade] = Evaluation();
	let submitButton = document.getElementById("submit-button")!;
	submitButton.setAttribute("hidden", "hidden");

	let resultPicture = CanvasResult(userPoints as number, Grade as string);
	const canvas = document.getElementById("resultPainting");
	canvas!.removeAttribute("hidden");
}

function Evaluation() {
	let userPoints = 0;
	let Grade = "D";

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

	const gradeTable: { [key: number]: string } = {
		0: "D",
		1: "C",
		2: "C",
		3: "C",
		4: "B",
		5: "B",
		6: "B",
		7: "A",
		8: "A",
		9: "A",
		10: "S",
		11: "S",
		12: "SS",
		13: "SS",
		14: "SSS",
		15: "SSS",
	};

	Grade = gradeTable[userPoints];
	return [userPoints, Grade];
}

function CanvasResult(userPoints: number, Grade: string) {
	const canvas = document.getElementById(
		"resultPainting"
	) as HTMLCanvasElement;
	const ctx = canvas.getContext("2d");

	ctx!.fillStyle = "white";
	ctx!.fillRect(0, 0, 800, 450);
	ctx!.strokeRect(5, 5, 790, 440);

	ctx!.font = "30px Arial";
	ctx!.textAlign = "center";
	ctx!.fillStyle = "black";
	const xText = canvas.width / 2;
	const yText = canvas.height / 5;
	ctx!.fillText("Congratulations!", xText, yText);

	ctx!.font = "20px Arial";
	const lineSpacing = 30; // spacing between the lines
	ctx!.fillText(
		`You scored ${userPoints} out of ${totalPoints} points! Rank ${Grade}`,
		xText,
		yText + lineSpacing
	);

	const gradeImg = new Image();
	switch (Grade) {
		case "A":
			gradeImg.src = A.src;
			break;
		case "B":
			gradeImg.src = B.src;
			break;
		case "C":
			gradeImg.src = C.src;
			break;
		case "D":
			gradeImg.src = D.src;
			break;
		case "S":
			gradeImg.src = S.src;
			break;
		case "SS":
			gradeImg.src = SS.src;
			break;
		case "SSS":
			gradeImg.src = SSS.src;
			break;
	}
	gradeImg.addEventListener("load", (e) => {
		ctx!.drawImage(gradeImg, 175, 130);
	});

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
