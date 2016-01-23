import createImmutableReducer from '../util/immutableReducer';
import I from 'immutable';

import {REGISTER, LOGIN} from '../ActionTypes';
import {createAsyncReducer} from 'redux-happy-async';

const State = I.Record({
  async: I.Map(),
  authToken: null,
  user: null,
});

const authReducer = createImmutableReducer(new State(), {
  ...createAsyncReducer({
    type: REGISTER,

    onSuccess({resp}, state) {
      const {jwt, user} = resp;

      return state
        .set('authToken', jwt)
        .set('user', user);
    },
  }),

  ...createAsyncReducer({
    type: LOGIN,

    onSuccess({resp}, state) {
      const {jwt, user} = resp;

      return state
        .set('authToken', jwt)
        .set('user', user);
    },
  })
});

export default authReducer;
