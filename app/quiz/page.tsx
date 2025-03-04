import Link from "next/link";
import Quizmaster from "../components/quiz/questions";
// import Quiz from "@/app/components/quiz/questions";

export default function Quiz() {
	return (
		<div className="lg:my-0 lg:p-20 py-4 space-y-4 flex flex-col items-center justify-center ">
			<h2>A narcissistic Quiz</h2>
			<Quizmaster />
		</div>
	);
}
