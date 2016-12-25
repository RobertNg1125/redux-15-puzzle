import React from "react";

export default class Cell extends React.Component {

	constructor(props) {
		super(props);
		this.onClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.moveCell(this.props.number);	
	}

	render() {
		const number = this.props.isMaxNumber ? "" : this.props.number;
		const className = this.props.isMaxNumber ? "" : "pointer";

		return (
			<td className={className} onClick={this.onClick} >{number}</td>
		);
	}
}
