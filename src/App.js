import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 3 },
			{ id: 2, value: 0 },
			{ id: 3, value: 1 },
			{ id: 4, value: 0 },
		],
	};

	handleDelete = (id) => {
		const { counters } = this.state;
		const elem = counters.find((count) => count.id === id);

		if (elem) {
			const index = counters.indexOf(elem);
			counters.splice(index, 1);
			this.setState({ counters });
		}
	};

	handleReset = () => {
		const counters = this.state.counters.map((v) => {
			v.value = 0;
			return v;
		});
		this.setState({ counters });
	};

	handleIncrement = (id) => {
		let { counters } = this.state;
		const newCounters = counters.map((v) => {
			if (v.id === id) {
				v.value += 1;
				return v;
			} else return v;
		});
		this.setState({ counters: newCounters });
	};

	render() {
		return (
			<React.Fragment>
				<Navbar counters={this.state.counters} />
				<main>
					<Counters
						handleReset={this.handleReset}
						handleDelete={this.handleDelete}
						handleIncrement={this.handleIncrement}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
