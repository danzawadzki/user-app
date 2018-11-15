import Accordion from '../Accordion/Accordion';
import CommentsList from '../../components/CommentsList/CommentsList';
import MessageInput from '../../components/MessageInput/MessageInput';
import React from 'react';
import { IComment } from '../../components/Comment/Comment';
import WithLoader from '../../components/WithLoader/WithLoader';

export interface IAppComments {
	/** Comments array */
	comments?: IComment[];
	/** Value of comment form */
	commentForm?: string;
	/** Handler to a onChange event. */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	/** Handler to a onSubmit event. */
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * AppComments component. Contains accordion component and message input to place new posts.
 * @constructor
 */
const AppComments = ({ comments, commentForm, onChange, onSubmit }: IAppComments) => (
	<>
		<Accordion
			heading={{
				on: `Hide comments (${comments ? comments.length : 0})`,
				off: `Show comments (${comments ? comments.length : 0})`
			}}>
			<CommentsList comments={comments} />
		</Accordion>
		<MessageInput
			id="commentForm"
			value={commentForm}
			placeholder="Add a comment..."
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	</>
);

export default WithLoader(AppComments);
