import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";

import Wrapper from "./Components/Wrapper";
import Card from "./Components/Card";
import Button from "./Components/Button";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heroAlias: null,
			currentLetter: null,
			lettersGuessed: [],
			numOfGuesses: null,
			numOfWins: null,
			tagline: null
		};

		this.displayGameInstructions = this.displayGameInstructions.bind(this);
		this.displaySuperhero = this.displaySuperhero.bind(this);
		this.resetGame = this.resetGame.bind(this);
		this.resetGameStatistics = this.resetGameStatistics.bind(this);
	}

	componentDidMount() {
		// TODO: Randomly get a tagline and superhero information (setup data using JSON server or external file)
		// TODO: Display the dashes on the screen
		// TODO: Work on business logic: registering what key is currently pressed, what keys have been guessed (to store in an array), subtract incorrect guesses, restart the game, clearing the stats, showing the instructions, showing the results,
		this.setState({
			currentLetter: "n/a",
			numOfGuesses: 10,
			numOfWins: 0
		});
	}

	displayGameInstructions() {
		// A modal will appear here that will display the instructions to the screen.
		alert("These are the instructions");
	}

	displaySuperhero() {
		// A modal will appear that will display the superhero
		alert("This button will give the answer.");
	}

	resetGame() {
		// This function will restart the game without clearing the statistics
		console.log("Restarting game...");
	}

	resetGameStatistics() {
		// This function will reset the game statistics
		console.log("Clearing statistics...");
	}

	render() {
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
								<Button
									type="button"
									className="btn btn-info"
									onClick={this.displayGameInstructions}
								>
									Instructions
								</Button>
								<Button
									type="button"
									className="btn btn-info"
									onClick={this.displaySuperhero}
								>
									Reveal
								</Button>
								<div>
									Current Letter: {this.state.currentLetter}
								</div>
								<div>
									Guesses Left: {this.state.numOfGuesses}
								</div>
								<div>Total Wins: {this.state.numOfWins}</div>
								<Button
									type="button"
									className="btn btn-primary"
									onClick={this.resetGame}
								>
									Restart Game
								</Button>
								<Button
									type="button"
									className="btn btn-warning"
									onClick={this.resetGameStatistics}
								>
									Reset Statistics
								</Button>
								<Button
									type="button"
									className="btn btn-danger"
									onClick={() => alert("Exiting...")}
								>
									Exit Game
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
