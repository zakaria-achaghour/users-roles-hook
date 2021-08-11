import {
    REGISTER,
    LOGIN
  } from "../types/type";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  const authReducer  =  (state = initialState, action) => {
     const { type, payload } = action;
  
    switch (type) {
      case REGISTER:
        return {
          ...state,
          isLoggedIn: false,
        };
    //   case REGISTER_FAIL:
    //     return {
    //       ...state,
    //       isLoggedIn: false,
    //     };
      case LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
    //   case LOGIN_FAIL:
    //     return {
    //       ...state,
    //       isLoggedIn: false,
    //       user: null,
    //     };
    //   case LOGOUT:
    //     return {
    //       ...state,
    //       isLoggedIn: false,
    //       user: null,
    //     };
      default:
        return state;
    }
  }

  export default authReducer;