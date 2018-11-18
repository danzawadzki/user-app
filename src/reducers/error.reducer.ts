import { Reducer } from 'redux';
import { errorConstants } from '../constants/error.constants';

/** Action interface */
export interface IAction {
	/** Action type name */
	type: string;
}

/** Error related state interface */
export interface IErrorState {
	/** Error flag */
	hasError: boolean;
}

/** Initial state */
const initialState: IErrorState = {
	hasError: false
};

/**
 * Error reducer
 *
 */
export const error: Reducer<IErrorState, IAction> = (
	state = initialState,
	action: IAction
) => {
	switch (action.type) {
		case errorConstants.HAS_ERROR:
			return {
				...state,
				hasError: true
			};
		default:
			return state;
	}
};

export default error;
