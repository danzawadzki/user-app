import { api } from '../services/api';
import { Action, Dispatch } from 'redux';
import { userConstants } from '../constants/user.constants';
import { IAppUser } from '../containers/App/App';
import { hasError } from './error.actions';

/**
 * Action to fetch user profile
 */
export const fetchUser = () => async (dispatch: Dispatch<Action>) => {
	/** Initialize action to fetch comments */
	dispatch({ type: userConstants.FETCH_USER_REQUEST });
	try {
		const response = await api<IAppUser>('users/1');
		await console.log(response);

		/** Dispatching success action with response as a payload */
		await dispatch({ type: userConstants.FETCH_USER_SUCCESS, payload: response });
	} catch (e) {
		/** Dispatching error action with response as a error message */
		dispatch({ type: userConstants.FETCH_USER_ERROR, payload: e });
		dispatch(hasError());
	}
};

/**
 * Action to increment user counter
 * @param label
 */
export const incrementUserCounter = (label: string) => ({
	type: userConstants.INCREMENT_USER_COUNTER,
	payload: label
});
