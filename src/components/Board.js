import React from "react";

import Cell from "./Cell";

export default class Board extends React.Component {
	render() {
		const { boardWidth, board } = this.props;

		// convert to 2 dimensional array
		const board2d = [ ...Array(boardWidth).fill().map( (e, i) => i ) ].map( (e, i) => {
			return board.slice( i * boardWidth, (i + 1) * boardWidth );
		});

		const rows = board2d.map( (row, i) => {
			const cells = row.map( number => <Cell key={"board_" + number }
				isMaxNumber={number == boardWidth * boardWidth}
				number={number}
				moveCell={this.props.moveCell} /> );

			return (
				<tr key={"boardrow_" + i} >
					{cells}
				</tr>
			);
		});

		return (
			<table id="board">
				<tbody>
					{rows}
				</tbody>
			</table>	
		);
	}
}
