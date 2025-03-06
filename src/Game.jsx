import { useState } from 'react';

import styles from './field.module.css';

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

//выводит массив field (с помощью метода map());
export const FieldLayout = ({ field }) => (
	//const { field } = props;

	<div className={styles.parent}>
		<div className={styles.block}>
			<div className={styles.grid}>
				{field.map((num, index) => {
					return (
						<div key={index} className={styles.cell}>
							{num}
						</div>
					);
				})}
			</div>
		</div>
	</div>
);

export const Field = () => {};

/*Если isDraw равен true — 'Ничья';
Если isDraw равен false, но isGameEnded равен true — `Победа: ${currentPlayer}`;
Если isDraw равен false и isGameEnded равен false — `Ходит: ${currentPlayer}*/
export const InformationLayout = () => {};

export const Information = () => {};

export const GameLayout = () => {};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); //кто ходит в данный момент
	const [isGameEnded, setIsGameEnded] = useState(false); //была ли завершена игра
	const [isDraw, setIsDraw] = useState(false); //была ли ничья
	const [field, setField] = useState(Array(9).fill(' ')); //массив с 9 ячейками

	//['', '', '', '', '', '', '', '', ''];
	//return <FieldLayout field={setField(field)} />;
	// const getClick = () => {
	// 	console.log('click');
	// };

	// const handleClick = (index) => {
	// 	if (field[index] || isGameEnded) {
	// 		return;
	// 	}

	// 	const newField = [...field];
	// 	newField[index] = currentPlayer;
	// setCurrentPlayer(currentPlayer === "x" ? "o" : "x"); //меняем игрока
	// };

	// const Click = (e, index) => {
	// 	// console.log('click');
	// 	// console.log(e[index]);
	// 	// if (field[index] || isGameEnded) {
	// 	// 	return;
	// 	// }

	// 	// const newField = [...field];
	// 	// newField[index] = currentPlayer;
	// 	setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x'); //меняем игрока
	// 	console.log(field);
	// };
	// const winner = WIN_PATTERNS.every((cellIndex) => {
	// 	return field[cellIndex] === currentPlayer;
	// 	//console.log(currentPlayer);

	// 	//console.log(cellIndex[]);
	// 	//console.log(currentPlayer);

	// 	//field[cellIndex] === currentPlayer;
	// });
	// console.log(winner);
	//console.log(WIN_PATTERNS[0][2]);

	//let s = [];

	const X = field
		.map((cellIndex, index) => {
			if (cellIndex === 'X') return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);

	const O = field
		.map((cellIndex, index) => {
			if (cellIndex === 'O') return index;
		})
		.filter((cellIndex) => cellIndex !== undefined);
	// console.log('ddd', X);

	// console.log();

	const compareFunc = (a, b) =>
		a.length === b.length && a.every((element, index) => element === b[index]);

	// let a = X;
	// let b = WIN_PATTERNS[0];
	WIN_PATTERNS.forEach((cellIndex) => {
		if (compareFunc(X, cellIndex)) {
			console.log('X win');
		}
		if (compareFunc(O, cellIndex)) {
			console.log('O win');
		}
	});
	console.log(O);

	//console.log(compareFunc(X, WIN_PATTERNS[0]));

	// const s = X.every((element, index) => element !== WIN_PATTERNS[index]);

	// console.log(s);

	// //console.log(s);
	// if (s === O) {

	// }
	// if (s === X) {
	// 	console.log('X win');
	// }

	//console.log(X);

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<div className={styles.grid}>
					{field.map((num, index) => {
						return (
							<div
								onClick={() => {
									//const newField = [...field];
									const newField = [...field];

									newField[index] = currentPlayer;
									setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
									setField(newField);

									//console.log(newField);
									//setField(num);
									// console.log(num[currentPlayer]);

									// setCurrentPlayer(
									// 	currentPlayer[index] === 'x' ? 'o' : 'x',
									// );
									//console.log(currentPlayer[index]);
								}}
								key={index}
								className={styles.cell}
							>
								{num}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

//const cells = Array(9).fill(null); //массив с 9 ячейками

// const handleCellClick = (index) => {
// 	if (cells[index] || isGameEnded) {
// 		return;
// 	}

// 	const newCells = [...cells];
// 	newCells[index] = currentPlayer;
//   setCurrentPlayer(currentPlayer === "x" ? "o" : "x"); //меняем игрока

// const AppLoyout = ({ a, b, setA, setB, sum }) => (
// 	<div className={styles.app}>
// 		<div>A: {a}</div>
// 		<button onClick={() => setA(a + 1)}>a+ 1</button>
// 		<div>B: {b}</div>
// 		<button onClick={() => setB(b + 1)}>b+ 1</button>
// 		<div> Сумма А+В: {sum}</div>
// 	</div>
// );

// //Stateful
// export const App = () => {
// 	const [a, setA] = useState(0);
// 	const [b, setB] = useState(0);

// 	const sum = a + b;
// 	//console.log(sum);

// 	return <AppLoyout a={a} b={b} setA={setA} setB={setB} sum={sum} />;
// };
