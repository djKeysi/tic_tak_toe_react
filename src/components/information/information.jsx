import styles from './information.module.css';
import PropTypes from 'prop-types';

/*Если isDraw равен true — 'Ничья';
Если isDraw равен false, но isGameEnded равен true — `Победа: ${currentPlayer}`;
Если isDraw равен false и isGameEnded равен false — `Ходит: ${currentPlayer}*/

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<>
			{!isDraw && !isGameEnded && (
				<div>
					<label>{`Ходит игрок: ${currentPlayer}`}</label>
				</div>
			)}

			{isGameEnded && !isDraw && (
				<div>
					<label
						className={styles.colorWinner}
					>{`Победил игрок: ${currentPlayer}`}</label>
				</div>
			)}
			{isDraw && (
				<div>
					{' '}
					<label className={styles.colorDraw}>{'Ничья'}</label>
				</div>
			)}
		</>
	);
};

export const InformationContainer = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
