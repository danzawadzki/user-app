import * as React from 'react';
import './Comment.scss';
import Avatar from '../Avatar/Avatar';
import { timeAgo } from '../../utilities/helpers/date.helpers';

export interface ICommentAuthor {
	/** Object containing avatar urls. */
	avatar?: {
		/** Optional image url for small screen devices (screen < 600px) */
		small?: string;
		/** Required image ulr for medium screen devices (600px =< dev <= 1600px) or all else if not provided. */
		regular?: string;
		/** Optional image url for large screen devices (1900px < screen) */
		large?: string;
	};
	name: string;
}

export interface IComment {
	/** Comment author object */
	author: ICommentAuthor;
	/** Content of the comment.  */
	comment: string;
	/** Comment timestamp */
	timestamp: string;
}

/**
 * Comment component.
 *
 * @version 1.0.0
 */
const Comment = ({ author: { avatar, name }, comment, timestamp }: IComment) => {
	return (
		<div className="Comment">
			<div className="Comment__header">
				<div className="header__avatar">
					<Avatar name={name} avatar={avatar} isSmaller={true} />
				</div>
				<div className="header__name">{name}</div>
				<div className="header__date">
					{timeAgo(new Date(timestamp), new Date())}
				</div>
			</div>
			<div className="Comment__content">{comment}</div>
		</div>
	);
};

export default Comment;
