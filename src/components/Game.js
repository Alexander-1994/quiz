import { useContext } from "react";
import dataContext from "../context";
import questions from "../data";

export default function Game() {
	const context = useContext(dataContext);
	const {step, onClickVar} = context;
	const {title, variants} = context.question;
	const size = Math.round(step / questions.length * 100);

	return (
		<>
			<div className="progress">
				<div style={{ width: `${size}%` }} className="progress__inner"></div>
			</div>
			<h1>{title}</h1>
			<ul>
				{
					variants.map((text, i) => {
						return <li key={i} onClick={() => onClickVar(i)}>{text}</li>
					})
				}
			</ul>
		</>
	);
}