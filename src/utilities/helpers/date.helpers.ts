/**
 * Helper function, that counts the time between two dates and
 * returning it in the short and fancy format.
 *
 * @note Function has been built basing on the solution created by stackoverflow's
 * user @SkySanders [https://stackoverflow.com/questions/3177836]
 *
 * @param {Date} prevDate - Earlier date.
 * @param {Date} nextDate - The date which the number of days will be related to.
 */
export const timeAgo = (prevDate: Date, nextDate: Date): string => {
	debugger;
	let seconds = Math.floor((+nextDate - +prevDate) / 1000);

	//Return years
	let interval = Math.floor(seconds / 31536000);
	if (interval >= 1) return interval + 'y';

	//Return months
	interval = Math.floor(seconds / 2592000);
	if (interval >= 1) return interval + 'm';

	//Return days
	interval = Math.floor(seconds / 86400);
	if (interval >= 1) return interval + 'd';

	//Return hours
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) return interval + 'h';

	//Return minutes
	interval = Math.floor(seconds / 60);
	if (interval >= 1) return interval + 'm';

	//Return seconds
	return Math.floor(seconds) + ' s';
};
