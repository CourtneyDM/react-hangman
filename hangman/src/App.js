import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends Component {
	render() {
		// let current = null,
		// 	letter = "",
		// 	guess = null,
		// 	turns = null,
		// 	wins = null;
		return (
			<Wrapper className="main">
				<div className="row">
					<div className="col-md-5">
						{/* Game Board Card */}
						<div className="game-board">
							<Card
								header="Game Board"
								title="Here is where the hint will go"
								cardText="Here is where the dashes will go"
							>
								<Button type="button" className="btn btn-info">
									Instructions
								</Button>
								<Button type="button" className="btn btn-info">
									Reveal
								</Button>
							</Card>
						</div>
					</div>
					<div className="col-md-5">
						{/* Game Statistics Card */}
						<div className="game-stats">
							<Card header="Game Statistics">
								<p>Statistics will go here</p>
								<Button
									type="button"
									className="btn btn-success"
								>
									Restart
								</Button>
								<Button
									type="button"
									className="btn btn-danger"
								>
									Exit
								</Button>
							</Card>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default App;
