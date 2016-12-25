import React from "react";
import { connect } from "react-redux";

import Board from "../components/Board";
import Congrats from "../components/Congrats";

import {
	moveLeft,
	moveRight,
	moveBottom,
	moveTop,
	moveNumber,
	shuffle
} from "../actions";

class App extends React.Component {

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown.bind(this));
		this.props.shuffle();
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
		const isWin = this.props.isWin ? <h1>You are win</h1> : <span></span>;
		return (
			<div>
				<Congrats isWin={this.props.isWin} />
				<Board board={this.props.gameBoard}
					boardWidth={this.props.width}
					moveCell={this.props.moveCell} />
				<br/>
				<input type="button" value="shuffle" onClick={this.props.shuffle} />
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		isWin : state.board.isWin,
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
		moveTop: () => dispatch(moveTop()),
		shuffle: () => dispatch(shuffle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
