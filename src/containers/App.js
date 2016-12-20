import React from "react";
import { connect } from "react-redux";

import Board from "../components/Board";
import { moveNumber } from "../actions";

class App extends React.Component {
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
		moveCell: (number) => {
			dispatch(moveNumber(number));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
