import React, { Component } from 'react';
import './App.scss';
import Module from '../../components/Module/Module';
import CommentsList from '../../components/CommentsList/CommentsList';
import AppUserProfile from './AppUserProfile';
import Accordion from '../Accordion/Accordion';

/**
 * 1. Textarea to send comments
 * 4. Mobile version
 * 5. Redux integration
 *    5.1 mockup api
 *    5.2 create action to fetchComments
 *    5.3 create action to addComment
 *    5.4 create action to fetchUser
 */

export default class App extends Component {
	render() {
		const user = {
			author: {
				name: 'Random User',
				avatar: {
					small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
					regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
					large: 'https://randomuser.me/api/portraits/men/65.jpg'
				}
			},
			comment:
				'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
			timestamp: '10/10/2018'
		};

		const comments = [user, user, user, user];

		return (
			<div className="App">
				<AppUserProfile />
				<Module id="Comments">
					<Accordion
						heading={{
							on: `Hide comments (${comments.length})`,
							off: `Show comments (${comments.length})`
						}}>
						<CommentsList comments={comments} />
					</Accordion>
				</Module>
			</div>
		);
	}
}
