import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Button from "./components/Button";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Wrapper>
						<p>Hello World!</p>
						<Button
							className="btn btn-primary"
							text="Instruction"
						/>
						<Button text="Reveal" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
					</Wrapper>
					<Wrapper>
						<Button text="Restart" />
						<Button text="Ext" />
					</Wrapper>

					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
