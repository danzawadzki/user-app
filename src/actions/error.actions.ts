import { errorConstants } from '../constants/error.constants';

/**
 * Action to set error flag
 */
export const hasError = () => ({
	type: errorConstants.HAS_ERROR
});
