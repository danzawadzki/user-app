import * as React from 'react';
import './Icon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

/** Color type */
type color = 'orange' | 'gray';

export interface IIcon {
	/** Icon name */
	name: IconName;
	/** Icon type */
	type: IconPrefix;
	/** Icon color */
	color: color;
	/** Handler to the onClick event */
	onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * Registering font-awesome in the library
 *
 * @source https://fontawesome.com/how-to-use/on-the-web/using-with/react
 */
library.add(faHeart, faShareSquare);

/**
 * Icon component
 *
 * @version 1.0.0
 */
const Icon: React.StatelessComponent<IIcon> = ({
	name,
	type = 'fas',
	color,
	onClick
}) => (
	<span className={`Icon Icon--${color}`} onClick={onClick}>
		<FontAwesomeIcon icon={[type, name]} />
	</span>
);

export default Icon;
