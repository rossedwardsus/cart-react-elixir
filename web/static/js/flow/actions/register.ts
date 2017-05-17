import {REGISTER} from '../constants/actionTypes.ts';

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
        type: REGISTER,
        data: "response.data"
      })
  }
}


export function registerUser(email: any, password: any) {
  let url = "";
  return function (dispatch: any) { 
    /*axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_WEATHER_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: 'WAITING_FOR_AUTHENTICATION',
        error: response.error
      })*/
      /*axios.post('http://localhost:4000/api/graphql', {
                 query: 'mutation {register (first: "' + that.state.first + '", last: "' + that.state.last + '", email: "' + that.state.email + '", mobile: "' + this.state.mobile + '", password: "' + this.state.password +'") {status}}'
          })
          .then( response => {

                console.log("response" + JSON.stringify(response));

                that.props.history.push('/user');

          })
          .catch( error => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();

         //if (!error.status) {
            // network error
          //}

          })*/
      dispatch({
        type: REGISTER,
        data: "session_key"
      })
  }
}