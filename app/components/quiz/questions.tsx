"use client";
import { frageAntwort } from "@/app/components/quiz/qa";

const questionsAnswers = frageAntwort.map((item, index) => (
	<li className="" key={index.toString()}>
		{item.question} <br />
		{item.options.map((option, index) => (
			<div key={index}>
				<input type="radio" id={index.toString()} name="option" />
				<label htmlFor={index.toString()}>{option}</label>
			</div>
		))}
	</li>
));

function Evaluation() {
	alert("You clicked me!");
}

export default function Quizmaster() {
	return (
		<div>
			<form>
				<ul>{questionsAnswers}</ul>
				<button onClick={Evaluation}>Submit</button>
			</form>
		</div>
	);
}
