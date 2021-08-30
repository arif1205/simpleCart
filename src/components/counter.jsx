import React, { Component } from "react";

class Counter extends Component {
	counter() {
		const { value } = this.props.counter;
		return value === 0 ? "zero" : value;
	}

	getBadgeClass() {
		let classes = "btn btn-sm m-2 btn-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	render() {
		const { counter, handleDelete, handleIncrement } = this.props;
		const { id } = counter;
		return (
			<div>
				<span
					style={{ minWidth: "50px" }}
					className={this.getBadgeClass()}>
					{this.counter()}
				</span>
				<button
					onClick={() => handleIncrement(id)}
					className='btn btn-secondary btn-sm'>
					Increment
				</button>
				<button
					onClick={() => handleDelete(id)}
					className='btn btn-danger btn-sm m-2'>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
