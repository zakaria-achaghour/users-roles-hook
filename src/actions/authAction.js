import { REGISTER } from "../types/type";
import axios from 'axios'

export const authRegister = (firstName,lastName,email,gender,password) => async dispatch => {
    try{
      const res = await axios.post(`http://localhost:8000/api/auth/register`,{email:email,password:password,firstname:firstName,lastname:lastName,username:firstName.charAt(0)+'.'+lastName,gender:gender,role:'role'});
  
      dispatch({
        type: REGISTER,
          payload: res.data
      })
      return Promise.resolve(res.data)
  }
  catch(error){
      
      // console.log(error.message);
      return Promise.reject(error.message)
  
  }
}

export const authLogin = (email,password) => async dispatch => {
 
  try{
    const res = await axios.post(`http://localhost:8000/api/auth/login`,{email:email,password:password});

    dispatch({
      type: REGISTER,
        payload: res.data
    })
    if (res.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return Promise.resolve(res.data)
    
}
catch(error){
    
    // console.log(error.message);
    return Promise.reject(error.message)

}
}