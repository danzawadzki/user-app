import React, { Component } from 'react';
import './App.scss';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Button id="test" onClick={e => console.log(e)}>
					Push me!
				</Button>
				<Avatar
					name="Son Goku"
					avatar={{
						small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
						regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
						large: 'https://randomuser.me/api/portraits/men/65.jpg'
					}}
				/>
				<Avatar
					name="Son Goku"
					avatar={{
						small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
						regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
						large: 'https://randomuser.me/api/portraits/men/65.jpg'
					}}
					isSmaller={true}
				/>

				<Avatar name="Son Goku" isSmaller={true} />
			</div>
		);
	}
}

export default App;
