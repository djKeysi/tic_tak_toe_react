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
export const FieldLayout = () => (
	<div className={styles.parent}>
		<div className={styles.block}>
			<div className={styles.grid}>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
				<div className={styles.cell}></div>
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
	const [field, setField] = useState(Array(9).fill(null)); //массив с 9 ячейками

	//['', '', '', '', '', '', '', '', ''];
	return <FieldLayout />;
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
