import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBarContainer from './Components/TopBar/TopBar-Container';
import Body from './Components/Body/Body';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopBarContainer>
				</TopBarContainer>
				<Body>
				</Body>
			</div>
		);
	}
}

export default App;
