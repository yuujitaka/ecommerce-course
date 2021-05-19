import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

const SignIn = () => {
  const [inputs, setInputs] = useState({email: '', password: ''});

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(inputs.email, inputs.password);
      setInputs({email: '', password: ''});
    }catch(error){
      alert(error.message);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    //Computed Property Names: https://medium.com/front-end-weekly/javascript-object-creation-356e504173a8
    setInputs(prevState => ({ ...prevState, [name]: value }));

  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={inputs.email} required handleChange={handleChange} label="Email"/>
        <FormInput name="password" type="password" value={inputs.password} required handleChange={handleChange} label="Password"/>

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signWithGoogle} isGoogleSignIn type="button">Sign In with Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
}

export default SignIn;