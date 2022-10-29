import { useState } from 'react';
import dataContext from '../context';
import questions from '../data';
import Game from './Game';
import Result from './Result';
import '../index.scss';

const {Provider} = dataContext;

function App() {
	const [step, setStep] = useState(0),
		  [right, setRight] = useState(0);

	const question = questions[step];

	const onClickVar = (id) => {
		setStep(step => step + 1);

		if (question.correct === id) {
			setRight(right => right + 1);
		}
	}

	const states = {
		step,
		right,
		question,
		onClickVar
	};

	return (
		<Provider value={states}>
			<div className="App">
				{
					step === questions.length ? <Result /> : <Game />
				}
			</div>
		</Provider>
	);
}

export default App;
