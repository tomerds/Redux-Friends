import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => dispatch({
      type: LOGIN_FAIL
    }))

}
export const getData = () => dispatch => {
  dispatch({ type: FETCH_START })
  axios.get('http://localhost:5000/api/friends', {
    headers: { Authorization: localStorage.getItem('token') }
  })
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.friends,
      })
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token')
      }
      dispatch({
        type: FETCH_FAILURE,
        payload: err.response
      })
    })
}

