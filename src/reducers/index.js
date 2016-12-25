import { combineReducers } from "redux";
import {
	MOVE_RIGHT,
	MOVE_BOTTOM,
	MOVE_LEFT,
	MOVE_TOP,
	MOVE_NUMBER
} from "../actions";

const getPositionByNumber = (board, width, number) => {
	const index = board.indexOf(number);

	if (index == -1) {
		return [0, 0];
	}

	const row = parseInt(index / width);
	const col = index - row * width

	return [row, col];
};

const getNextPosition = (direction, width, position) => {
	const [row, col] = position;

	if (direction == MOVE_RIGHT && col == 0
		|| direction == MOVE_LEFT && col == width -1
		|| direction == MOVE_BOTTOM && row == 0
		|| direction == MOVE_TOP && row == width - 1) {
		return position;
	}

	if (direction == MOVE_RIGHT) {
		return [row, col -1];
	}
	if (direction == MOVE_LEFT) {
		return [row, col + 1];
	}
	if (direction == MOVE_BOTTOM) {
		return [row - 1, col];
	}
	if (direction == MOVE_TOP) {
		return [row + 1, col];
	}

	return position;
}

const board = (state = {
	isWin: false,
	width: 4,
	gameBoard: []
}, action) => {
	const {gameBoard, width} = state;

	let tmp = [ ...gameBoard ]
	const maxNumber = width * width;
	const [maxRow, maxCol] = getPositionByNumber(gameBoard, width, maxNumber);

	const defaultBoard = [ ...Array(maxNumber).fill().map( (e, i) => i + 1) ];
	
	switch (action.type) {
		case MOVE_LEFT:
		case MOVE_RIGHT:
		case MOVE_BOTTOM:
		case MOVE_TOP:
		case MOVE_NUMBER:
			let number = -1;
			let [row, col] = [-1, -1];
			let isWin = false;

			if (action.type == MOVE_NUMBER) {
				number = action.number;
				[row, col] = getPositionByNumber(gameBoard, width, number);
			}
			else {
				[row, col] = getNextPosition(action.type, width, [maxRow, maxCol]);
				const nextIndex = col + row * width;
				number = (nextIndex >= 0 && nextIndex < width * width) ? tmp[nextIndex] : -1;
			}

			if (number > 0 && (
				   row == maxRow     && col == maxCol - 1
				|| row == maxRow     && col == maxCol + 1
				|| row == maxRow - 1 && col == maxCol
				|| row == maxRow + 1 && col == maxCol) )
			{
				const index = gameBoard.indexOf(number);
				const maxIndex = gameBoard.indexOf(maxNumber);
				tmp[index] = maxNumber;
				tmp[maxIndex] = number;

				isWin = JSON.stringify(defaultBoard) === JSON.stringify(tmp);
			}

			return {
				isWin,
				width,
				gameBoard: tmp
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	board
})

export default rootReducer;
