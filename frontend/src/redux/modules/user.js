const SAVE_TOKEN="SAVE_TOKEN";

function saveToken(token){
  return {
    type: "SAVE_TOKEN",
    token
  }
}

function facebookLogin(access_token) {
    return function(dispatch) {
      fetch("/users/login/facebook/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token
        })
      })
        .then(response => response.json())
        .then(json => {
          if(json.token){
            dispatch(saveToken(json.token));
          }
        })
        .catch(err => console.log(err));
    };
  }

  function usernameLogin(username, password){
    return function(dispatch) {
      fetch('/rest-auth/login/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(response => response.json())
      .then(json => {
        if(json.token){
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
    }
  }

function createAccount(username, password, email, name) {
  return function(dispatch) {
    fetch('/rest-auth/registration/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
    .then(response => response.json())
    .then(json => {
      if(json.token){
        dispatch(saveToken(json.token));
      }
    })
    .catch(err => console.log(err));
  }
}


const initialState = {
    isLoggedIn: localStorage.getItem('jwt')? true : false
}

function reducer(state=initialState, action){
    switch(action.type){
      case SAVE_TOKEN:
        return applySetToken(state, action);  
      default:
        return state;
    }
}

function applySetToken(state, action){
  const { token } = state;
  localStorage.setItem('jwt', token);
  return {
    ...state,
    isLoggedIn: true,
    token: token
  }
}

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
  };
  
  export { actionCreators };

export default reducer;