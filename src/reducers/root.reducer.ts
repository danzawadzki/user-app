import { combineReducers } from 'redux';
import comments from './comments.reducer';
import user from './user.reducer';

/**
 * Application root reducer
 */
export const rootReducer = combineReducers({ user, comments });
