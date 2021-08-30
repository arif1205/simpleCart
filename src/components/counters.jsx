import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const { handleReset, handleDelete, handleIncrement, counters } =
			this.props;
		return (
			<React.Fragment>
				<button
					className='btn btn-success d-block m-3'
					onClick={handleReset}>
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						handleDelete={handleDelete}
						handleIncrement={handleIncrement}></Counter>
				))}
			</React.Fragment>
		);
	}
}

export default Counters;
