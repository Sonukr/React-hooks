import React, {useState} from 'react';
import Input from 'Compoennts/Input'
import { Redirect } from 'react-router-dom';
import './index.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [toHome, setToHome] = useState(false);
  return(
    <div className="loginWrapper">
      <div className="loginContent">
        {toHome? <Redirect to="/emojis" /> : null}
        <Input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeHolder="Your Name"/>
        <Input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeHolder="Your Email"/>
        <button type="submit" onClick={e => setTimeout(() => setToHome(true), 0) }>Submit</button>
      </div>
    </div>
  )
}

export default Login;