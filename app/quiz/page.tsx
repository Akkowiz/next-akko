import Link from "next/link";
import Quizmaster from "../components/quiz/questions";
// import Quiz from "@/app/components/quiz/questions";

export default function Quiz() {
	return (
		<div className="lg:my-0 lg:p-10 py-4 m-4 space-y-4 flex flex-col items-center justify-center ">
			<div id="introtext">
				<h2 className="text-center mb-4">A narcissistic Quiz</h2>
				<p className="mb-4">
					With this quiz you can prove your mettle and show the world
					how proficient you are in useless trivia about me. <br />
					By the end of the quiz, you can submit your answers and
					depending on your points, you will get a different
					certificate!
					<br />
					You can only pick 1 option per question, however, some
					questions still allow for multiple correct choices!
				</p>
			</div>
			<Quizmaster />
		</div>
	);
}
