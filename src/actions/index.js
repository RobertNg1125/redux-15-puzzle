
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_BOTTOM = "MOVE_BOTTOM";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_TOP = "MOVE_TOP";
export const MOVE_NUMBER = "MOVE_NUMBER";

export const moveRight = () => ({
	type: MOVE_RIGHT
});

export const moveBottom = () => ({
	type: MOVE_BOTTOM
});

export const moveLeft = () => ({
	type: MOVE_LEFT
});

export const moveTop = () => ({
	type: MOVE_TOP
});

export const moveNumber = (number) => ({
	type: MOVE_NUMBER,
	number
});

export const shuffle = (count = 1000) => {

	const directions = [moveRight(), moveBottom(), moveLeft(), moveTop()];

	return (dispatch) => {
		let i = 0;
		let direction;

		while (i < count)
		{
			i++;
			let direction = Math.floor(Math.random() * directions.length);
			dispatch(directions[direction]);
		}
	};
};
