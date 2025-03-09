import styles from './fiels.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClickCell, isGameEnded }) => {
	//const { field,onClickCell } = props;
	return (
		<>
			{field.map((num, index) => {
				return (
					<div
						onClick={() => onClickCell(index)}
						className={
							num === ' ' && !isGameEnded
								? styles.cell
								: styles.cell + ' ' + styles.disabled
						}
						key={index}
					>
						{num}
					</div>
				);
			})}
		</>
	);
};

export const FieldContainer = ({ field, onClickCell, isGameEnded }) => {
	return (
		<FieldLayout field={field} onClickCell={onClickCell} isGameEnded={isGameEnded} />
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
	onClickCell: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
	onClickCell: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
