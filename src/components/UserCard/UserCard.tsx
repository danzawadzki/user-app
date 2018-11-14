import * as React from 'react';
import './UserCard.scss';
import Avatar, { IAvatarSrc } from '../Avatar/Avatar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IUserCard {
	/** User name */
	name: string;
	/** User location */
	location?: string | null;
	/** Object containing avatar source */
	avatar?: IAvatarSrc;
	/** Handler to heart icon onClick action */
	onHeartClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * UserCard component.
 *
 * @version 1.0.0
 */
const UserCard = ({ name, location = 'Unknown', avatar, onHeartClick }: IUserCard) => {
	/**
	 * Registering font-awesome in the library
	 *
	 * @source https://fontawesome.com/how-to-use/on-the-web/using-with/react
	 */
	library.add(faHeart);

	return (
		<div className="UserCard">
			<div className="UserCard__avatar">
				<Avatar name={name} avatar={avatar ? avatar : null} />
			</div>
			<div className="UserCard__details">
				<div className="details">
					<h1 className="details__name">
						{name}{' '}
						<span className="details__name--lighter" onClick={onHeartClick}>
							<FontAwesomeIcon icon={['far', 'heart']} />
						</span>
					</h1>
					<p className="details__location">{location}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
