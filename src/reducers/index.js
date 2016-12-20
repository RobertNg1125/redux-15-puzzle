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

// const getNextPosition = (direction, width, position) => {
// 	const [col, row] = position;
// 
// 	if (direction == MOVE_RIGHT && col == 0
// 		|| direction == MOVE_LEFT && col == width -1
// 		|| direction == MOVE_BOTTOM && row == 0
// 		|| direction == MOVE_TOP && row = witdh - 1) {
// 		return position;
// 	}
// 
// 	if (direction == MOVE_RIGHT) {
// 		return [col -1, row];
// 	}
// 	if (direction == MOVE_LEFT) {
// 		return [col + 1, row];
// 	}
// 	if (direction == MOVE_BOTTOM) {
// 		return [col, row - 1];
// 	}
// 	if (direction == MOVE_TOP) {
// 		return [col, row + 1];
// 	}
// 
// 	return position;
// }

const board = (state = {
	width: 4,
	gameBoard: []
}, action) => {
	const {gameBoard, width} = state;

	let tmp = [ ...gameBoard ]
	const maxNumber = width * width;
	const [maxRow, maxCol] = getPositionByNumber(gameBoard, width, maxNumber);
	// const nextPosition = getNextPosition(direction, state.width, maxNumber);
	// const nextNumber =
	
	switch (action.type) {
		case MOVE_NUMBER:
			const { number } = action;
			const [row, col] = getPositionByNumber(gameBoard, width, number);

			if (row == maxRow        && col == maxCol - 1
				|| row == maxRow     && col == maxCol + 1
				|| row == maxRow - 1 && col == maxCol
				|| row == maxRow + 1 && col == maxCol)
			{
				const index = gameBoard.indexOf(number);
				const maxIndex = gameBoard.indexOf(maxNumber);
				console.log(index, maxIndex);
				tmp[index] = maxNumber;
				tmp[maxIndex] = number;
			}

			return {
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
