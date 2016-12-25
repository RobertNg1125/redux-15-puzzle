import React from "react";

export default class Congrats extends React.Component {

	render() {
		return this.props.isWin ? <h1>You are win</h1> : <h1>&nbsp;</h1>;
	}
}
