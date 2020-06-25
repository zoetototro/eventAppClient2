import axios from "axios";
import ReactNative, { AsyncStorage } from "react-native";
import { setLightEstimationEnabled } from "expo/build/AR";

const LOAD = "LOAD";
const LOAD_SUCCESS = "LOAD_SUCCESS";
const LOAD_FAIL = "LOAD_FAIL";
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAIL = "LOGOUT_FAIL";
const TOKEN = "TOKEN";

const initialState = {
  loaded: false,
  loggingIn: false,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get("/loadAuth"),
  };
}

export const loginSuccess = () => {
  return {
    type: LOGIN,
  };
};

const apiHost = "http://localhost:8000/api/auth";

/*export function login(email, password) {
  return (dispatch) => {
    axios
      .post(`${apiHost}/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.access_token);
        dispatch(loginSuccess());
        storeData(res.data.access_token);
      })
      .catch((e) => console.log(e));
  };
}*/

export const login = (accessToken) => {
  storeData(accessToken);
};
storeData = async (token) => {
  console.log(token);
  try {
    await AsyncStorage.setItem("token", token);
    const value = await AsyncStorage.getItem("token");
    console.log(value);
    () => navigation.push("CreateAccount");
  } catch (error) {
    // Error saving data
  }
};

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get("/logout"),
  };
}
