const success = type => `${type}_SUCCESS`;
const fail = type => `${type}_FAIL`;

import base_url from '../../api/constants/server';

export const ApiCall = (action, payload) => async (dispatch, getState) => {
  dispatch({ type: action.type });
  return (false) ?
      setTimeout(
          () =>
              !payload.expect
                  ? dispatch({ type: fail(action.type), response: payload.fail, payload })
                  : dispatch({ type: success(action.type), response: payload.success, payload }),
          1500,
      ) :
      fetch(base_url + action.request.url,{
        ...action.request,
        timeout: 10000,
        headers: {
          Authorization: ('token ' + getState().auth.token).trim(),
          'Content-Type': 'application/json',
          ...action.request.headers,
        },
      }).then(async res => {
        let data = null;
        if (res.status === 200 || res.status === 201) {
          data = await res.json();
          dispatch({ type: success(action.type), response: data, payload });
        }else if (res.status === 401){
          data = await res.json();
          console.warn(data)
          // dispatch({ type: 'INIT_PHONE', err: data, payload });
        }else {
          data = await res.json();
          console.warn(data)
          dispatch({ type: fail(action.type), err: data, payload });
        }
      }).catch(err => {
        console.warn({ type: fail(action.type), err: err.response.data, payload });
        dispatch({ type: fail(action.type), err: err.response.data, payload });
      });
};
