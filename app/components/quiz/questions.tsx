"use client";
import { frageAntwort } from "@/app/components/quiz/qa";

const questionsAnswers = frageAntwort.map((item, index) => (
	<li className="" key={index.toString()}>
		<input type="radio" id={index.toString()} name="option" />
		<label htmlFor={index.toString()}></label>
		{item.question}
	</li>
));

export default function Quizmaster() {
	return (
		<div className="border-pink-600">
			<form>
				<ul>{questionsAnswers}</ul>
				<button type="submit">Confirm</button>
			</form>
		</div>
	);
}
