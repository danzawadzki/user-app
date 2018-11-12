import * as React from 'react';
import './Avatar.scss';

export interface IAvatar {
	/** User name, who's avatar is displayed for alt attr. */
	name: string;
	/** Flag to display smaller avatar. */
	isSmaller?: Boolean;
	/** Object containing avatar urls. */
	avatar?: {
		/** Optional image url for small screen devices (screen < 600px) */
		small?: string;
		/** Required image ulr for medium screen devices (600px =< dev <= 1600px) or all else if not provided. */
		regular?: string;
		/** Optional image url for large screen devices (1900px < screen) */
		large?: string;
	};
}

/**
 * Avatar component.
 *
 * @version 1.0.0
 */
const Avatar = ({ name, isSmaller = false, avatar }: IAvatar) => {
	//Creating srcSet
	let srcSet = '';
	if (avatar) {
		if (avatar.small) srcSet = `${avatar.small} 480w, `;
		if (avatar.regular) srcSet += `${avatar.regular} 960w, `;
		if (avatar.regular) srcSet += `${avatar.large} 1280w`;
	}

	return (
		<div className={`Avatar ${isSmaller ? 'Avatar--smaller' : ''}`}>
			{srcSet && (
				<img
					className={`Avatar__image ${
						isSmaller ? 'Avatar__image--smaller' : ''
					}`}
					srcSet={srcSet && srcSet}
					alt={`${name} avatar`}
				/>
			)}
		</div>
	);
};

export default Avatar;
