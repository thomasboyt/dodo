/*
 * Export additional middleware you want to use in your Redux reducers here.
 */

import thunkMiddleware from 'redux-thunk';
import {syncHistory} from 'redux-simple-router';

import history from './history';

export default [
  thunkMiddleware,
  syncHistory(history)
];
