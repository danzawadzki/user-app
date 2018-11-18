import { combineReducers, Reducer } from 'redux';
import comments from './comments.reducer';
import user from './user.reducer';
import error from './error.reducer';

/**
 * Application root reducer
 */
export const rootReducer: Reducer = combineReducers({ user, comments, error });
