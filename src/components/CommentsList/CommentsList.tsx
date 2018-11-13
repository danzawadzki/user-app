import * as React from 'react';
import './CommentsList.scss';
import Comment, { IComment } from '../Comment/Comment';

export interface IComments {
	/** Array of objects representing comments */
	comments?: Array<IComment>;
}

/**
 * Comments list component.
 *
 * @version 1.0.0
 */
const CommentsList = ({ comments = [] }: IComments) => {
	if (comments.length === 0)
		return <p className="CommentsList__message">No comments...</p>;

	return (
		<ul className="CommentsList">
			{comments.map(({ author, comment, timestamp }: IComment, index) => (
				<li className="CommentsList__item" key={`comment-${index}`}>
					<Comment author={author} comment={comment} timestamp={timestamp} />
				</li>
			))}
		</ul>
	);
};

export default CommentsList;
