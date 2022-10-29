import { useContext } from "react";
import dataContext from "../context";
import questions from "../data";

export default function Result() {
	const {right} = useContext(dataContext);

	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>Вы отгадали {right} ответа из {questions.length}</h2>
			<a href="/">
				<button>Попробовать снова</button>
			</a>
		</div>
	);
}