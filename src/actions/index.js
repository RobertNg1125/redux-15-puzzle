
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_BOTTOM = "MOVE_BOTTOM";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_TOP = "MOVE_TOP";
export const MOVE_NUMBER = "MOVE_NUMBER";

const moveRight = () => ({
	type: MOVE_RIGHT
});

const moveBottom = () => ({
	type: MOVE_BOTTOM
});

const moveLeft = () => ({
	type: MOVE_LEFT
});

const moveTop = () => ({
	type: MOVE_BOTTOM
});

export const moveNumber = (number) => ({
	type: MOVE_NUMBER,
	number
});
