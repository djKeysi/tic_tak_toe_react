import { useState } from 'react';

import styles from './Game.module.css';
import { FieldContainer } from './components/field/field';
import { InformationContainer } from './components/information/information';
import PropTypes from 'prop-types';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const playerArray = (player, field) =>
	field
		.map((cellIndex, index) => {
			if (cellIndex === player) return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);

const areArraysEqual = (array1, array2) => {
	return array2.every((x) => array1.includes(x));
};

const GameLayout = ({ onClickRestart }) => {
	return (
		<>
			<button onClick={onClickRestart}> Начать заново</button>
		</>
	);
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); //кто ходит в данный момент
	let [isGameEnded, setIsGameEnded] = useState(false); //была ли завершена игра
	let [isDraw, setIsDraw] = useState(false); //была ли ничья
	const [field, setField] = useState(Array(9).fill(' ')); //массив с 9 ячейками

	const onClickCell = (index) => {
		const newField = [...field];
		newField[index] = currentPlayer;
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		setField(newField);

		WIN_PATTERNS.forEach((cellIndex) => {
			if (areArraysEqual(playerArray('X', newField), cellIndex)) {
				setCurrentPlayer('X');
				setIsGameEnded(true);
			} else if (areArraysEqual(playerArray('O', newField), cellIndex)) {
				setCurrentPlayer('O');
				setIsGameEnded(true);
			}
			if (
				(playerArray('O', newField).length === 4 &&
					playerArray('X', newField).length === 5) ||
				(playerArray('O', newField).length === 5 &&
					playerArray('X', newField).length === 4)
			) {
				setIsDraw(true);
			}
		});
	};

	const OnClickRestart = () => {
		setField(Array(9).fill(' '));
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
	};

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h3>Игра крестики - нолики</h3>
				<div className={styles.grid}>
					<FieldContainer
						field={field}
						onClickCell={onClickCell}
						isGameEnded={isGameEnded}
					/>

					<InformationContainer
						currentPlayer={currentPlayer}
						isGameEnded={isGameEnded}
						isDraw={isDraw}
					/>
				</div>{' '}
				<GameLayout OnClickRestart={OnClickRestart} />
			</div>
		</div>
	);
};

GameLayout.PropTypes = {
	onClickRestart: PropTypes.func.isRequired,
};
