import React, { Component } from "react";

const Navbar = ({ counters }) => {
	const products = counters.filter((v) => v.value != 0);
	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container'>
				<button type='button' className='btn btn-info text-white'>
					Products{" "}
					<span className='badge bg-warning'>{products.length}</span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
