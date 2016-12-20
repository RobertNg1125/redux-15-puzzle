import React from "react";

export default class Cell extends React.Component {

	handleClick(event) {
		this.props.moveCell(this.props.number);	
	}

	render() {
		const number = this.props.isMaxNumber ? "" : this.props.number;
		const className = this.props.isMaxNumber ? "" : "pointer";

		return (
			<td className={className} onClick={this.handleClick.bind(this)} >{number}</td>
		);
	}
}
