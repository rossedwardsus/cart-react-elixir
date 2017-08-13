import {REGISTER_USER, REGISTER_SET_FIRST_NAME, REGISTER_SET_LAST_NAME, REGISTER_SET_EMAIL, REGISTER_SET_EMAIL_AGAIN, REGISTER_SET_PASSWORD, REGISTER_SET_PASSWORD_AGAIN} from '../constants/actionTypes.ts';

//import {setSession} from './session.ts';
import axios from 'axios';
import {push} from 'react-router-redux';

export function registerSetFirstName(value: any) {
  let url = "";
  console.log("setfirstname action");
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_FIRST_NAME,
        value: value
      })
  }
}

export function registerSetLastName(value: any) {
  let url = "";
  console.log("setlastname action");
  
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_LAST_NAME,
        value: value
      })
  }
}

export function registerSetEmail(value: any) {
  let url = "";
  console.log("register set email action");
  
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_EMAIL,
        value: value
      })
  }
}

export function registerSetEmailAgain(value: any) {
  let url = "";
  console.log("register set email again action");
  
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_EMAIL_AGAIN,
        value: value
      })
  }
}

export function registerSetPassword(value: any) {
  let url = "";
  console.log("register set password action");
  
  return function (dispatch: any) { 

    
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_PASSWORD,
        value: value
      })
  }
}

/*function* loadUserDetails({ payload }) {
  try {

    const user = yield call("gitHubApi", "payload");

    yield put({type: 'LOAD_USER_SUCCESS', user}); 
  } catch (error) {
    yield put({ type: 'LOAD_USER_FAILURE', error });
  }
}

function* watchRequest() {
  yield* takeLatest('LOAD_USER_REQUEST', loadUserDetails);
}*/


export function registerSetPasswordAgain(value: any) {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_SET_PASSWORD_AGAIN,
        value: value
      })
  }
}

export function registerUserCheckEmailExists(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_WEATHER_FAILURE,
        error: response.error
      })*/
      dispatch({
        type: REGISTER_USER,
        data: "response.data"
      })
  }
}


export function registerUser(first_name: any, last_name: any, email: any, password: any) {
  let url = "";
  console.log("register action " + email + " " + password);
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: 'WAITING_FOR_AUTHENTICATION',
        error: response.error
      })*/
      axios.post('/api/graphql', {
                 query: 'mutation {register (first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", password: "' + password +'") {user_id}}'
          })
          .then((response: any) => {

                console.log("register response" + JSON.stringify(response));


                //save token in cookie or oclstorage

                 //dispatch({
                //  type: REGISTER_USER,
                //  data: "session_key"
                //})

                //that.props.history.push('/user');
                //dispatch(push("/user"));

          })
          .catch((error: any) => {

                console.log("sorry an error occurred-email already exists" + error);
                //go to code/payment screen
        //        this.props.loadView();

         //if (!error.status) {
            // network error
          //}

          })
      //dispatch({
      //  type: REGISTER,
      //  data: "session_key"
      //})
    //dispatch(setSession());
  }
}