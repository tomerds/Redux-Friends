import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS, LOGIN_FAIL, LOGIN_START } from '../actions';

const initialState = {
  friends: [],
  error: '',
  errorStatusCode: null,
  fetchingData: false,
  loggingIn: false,
  logInFail: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        fetchingData: false,
        logInFail: true,
      }
    case FETCH_START:
      return {
        ...state,
        error: '',
        fetchingData: true,
        logInFail: false,
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        logInFail: false,
      }
    case FETCH_SUCCESS:
      console.log('FetchSuccess', action.payload)
      return {
        ...state,
        error: '',
        fetchingData: false,
        friends: action.payload
      }
    default:
      return state;
  }
}

export default reducer;