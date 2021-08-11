import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { authLogin } from '../../actions/authAction'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authLogin(email,password)).then(response => console.log(response)).catch(error => console.log(error));
     
        setEmail('');
        setPassword('');
      };
    return (
        <div className="container">
        <div className="card  ">
          <div className="card-header bg-warning">
              <h3>Register</h3>
          </div>
          <div className="card-body bg-default">
          <form onSubmit={handleLogin} >

          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="email" name='email' id='email'
             className="form-control" 
             onChange={onChangeEmail}  value={email}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name='password'
             id='password' className="form-control"
             onChange={onChangePassword}  value={password} />
        </div>
       <button className='btn btn-success mt-5' type="submit"> Save</button>
  
       </form> 
          </div>
        </div>
        </div>
 
    )
}

export default Login;
