import React from "react";
import { connect } from "react-redux";

import Board from "../components/Board";
import {
	moveLeft,
	moveRight,
	moveBottom,
	moveTop,
	moveNumber
} from "../actions";

class App extends React.Component {

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown.bind(this));
	}

	handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				this.props.moveLeft();
				break;
			case 39:
				this.props.moveRight();
				break;
			case 40:
				this.props.moveBottom();
				break;
			case 38:
				this.props.moveTop();
				break;
		}
	}

	render() {
		return (
			<div>
				<Board board={this.props.gameBoard}
					boardWidth={this.props.width}
					moveCell={this.props.moveCell} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		width : state.board.width,
		gameBoard : state.board.gameBoard
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		moveCell: (number) => { dispatch(moveNumber(number)); },
		moveLeft: () => dispatch(moveLeft()),
		moveRight: () => dispatch(moveRight()),
		moveBottom: () => dispatch(moveBottom()),
		moveTop: () => dispatch(moveTop())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
