const success = type => `${type}_success`;
const fail = type => `${type}_fail`;

import base_url from '../../api/constants/server';

export const ApiCall = (action, payload) => async (dispatch, getState) => {
  dispatch({ type: action.type });
  return (false) ?
      setTimeout(
          () =>
              !payload.test
                  ? dispatch({ type: fail(action.type), response: payload.fail, payload })
                  : dispatch({ type: success(action.type), response: payload.success, payload }),
          1500,
      ) :
      fetch(base_url + action.request.url,{
        ...action.request,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          ...action.request.headers,
        },
      }).then(async res => {
        let data = null;
        if (res.status === 200 || res.status === 201) {
          data = await res.json();
          console.warn(data)
          dispatch({ type: success(action.type), response: data, payload });
        }
      }).catch(err => {
        console.warn({ type: fail(action.type), err: 400, payload });
        dispatch({ type: fail(action.type),  payload });
      });
};
