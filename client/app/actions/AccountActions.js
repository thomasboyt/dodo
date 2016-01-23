import {routeActions} from 'redux-simple-router';

import {REGISTER, LOGIN} from '../ActionTypes';

import happyFetch from '../util/happyFetch';

function serializeForm(form) {
  for (let k of Object.keys(form)) {
    if (form[k] === '') {
      delete form[k];
    }
  }

  return JSON.stringify(form);
}

export function register(form) {
  return async function(dispatch) {
    const isSuccess = await happyFetch('/api/accounts', {
      opts: {
        method: 'POST',
        body: serializeForm(form)
      },
      type: REGISTER,
      dispatch,
    });

    if (isSuccess) {
      dispatch(routeActions.replace('/'));
    }
  };
}

export function logIn(form) {
  return async function(dispatch) {
    const isSuccess = await happyFetch('/api/session', {
      opts: {
        method: 'POST',
        body: serializeForm(form)
      },
      type: LOGIN,
      dispatch,
    });

    if (isSuccess) {
      dispatch(routeActions.replace('/'));
    }
  };
}
