import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from '../../actions/authAction'




  
function Register() {
    
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [successful, setSuccessful] = useState(false);
  
    const dispatch = useDispatch();
  
    const onChangeFirstName = (e) => {
      const FirstName = e.target.value;
      setFirstName(FirstName);
    };
    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
      };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const onChangeGender = (e) => {
        const gender = e.target.value;
        console.log(gender);
        setGender(gender);
      };
  
      
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(authRegister(firstName,lastName,email,gender,password)).then(response => console.log(response)).catch(error => console.log(error));
   
    setGender('male');
    setFirstName('');
    setLastName('');
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
          <form onSubmit={handleRegister} >
        <div className="form-group">
            <label htmlFor="firstname">firstname</label>
            <input type="text" name='firstname'
             id='firstname' className="form-control"
             onChange={onChangeFirstName}  value={firstName}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastname">lastname</label>
            <input type="text" name='lastname' 
            id='lastname' className="form-control" 
            onChange={onChangeLastName}  value={lastName}/>
        </div>
        
        <div className="form-check form-check-inline">
            <label className="form-check-label ">
                <input className="form-check-input " type="radio" name="gender" 
                 value="male" onChange={onChangeGender} checked={gender == 'male'}  /> Male
            </label>
             
        </div>

        <div className="form-check form-check-inline">
        <label className="form-check-label">
                <input className="form-check-input" type="radio" name="gender" 
                 value="female" onChange={onChangeGender} checked={ gender == 'female'} /> Female         
            </label>
        </div>


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
 
    );
}

export default Register;
