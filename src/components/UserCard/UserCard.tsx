import * as React from 'react';
import './UserCard.scss';
import Avatar, { IAvatarSrc } from '../Avatar/Avatar';
import Icon from '../Icon/Icon';

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
const UserCard: React.StatelessComponent<IUserCard> = ({
	name,
	location = 'Unknown',
	avatar,
	onHeartClick
}) => {
	return (
		<div className="UserCard">
			<div className="UserCard__avatar">
				<Avatar name={name} avatar={avatar ? avatar : null} />
			</div>
			<div className="UserCard__details">
				<div className="details">
					<h1 className="details__name">
						{name}{' '}
						<Icon
							name="heart"
							type="far"
							color="gray"
							onClick={onHeartClick}
						/>
					</h1>
					<p className="details__location">{location}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
