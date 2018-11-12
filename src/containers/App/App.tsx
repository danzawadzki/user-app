import React, { Component } from 'react';
import './App.scss';
import Button from '../../components/Button/Button';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Button id="test" onClick={e => console.log(e)}>
					Push me!
				</Button>
			</div>
		);
	}
}

export default App;
