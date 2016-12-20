import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = (width) => {
	const maxNumber = width * width;
	const gameBoard = [ ...Array(maxNumber).fill().map( (e, i) => i + 1) ];

	return createStore(
		rootReducer,
		{
			board : { width, gameBoard }
		},
		applyMiddleware(thunk)
	);
}

export default configureStore;
