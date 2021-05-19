import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.syles.scss';

const SignUp = () => {
  const [inputs, setInputs] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

  const handleSubmit = async e => {
    e.preventDefault();

    if(inputs.password != inputs.confirmPassword){
      alert("passwords don't match");
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      await createUserProfileDocument({...user, displayName: inputs.displayName });
      setInputs({displayName: '', email: '', password: '', confirmPassword: ''});

    } catch(error){
      alert(error.message);
    }
    
  }

  const handleChange = e => {
    const { name, value } = e.target;
    //Computed Property Names: https://medium.com/front-end-weekly/javascript-object-creation-356e504173a8
    setInputs(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput name="displayName" type="text" value={inputs.displayName} required handleChange={handleChange} label="Name"/>
        <FormInput name="email" type="email" value={inputs.email} required handleChange={handleChange} label="Email"/>
        <FormInput name="password" type="password" value={inputs.password} required handleChange={handleChange} label="Password"/>
        <FormInput name="confirmPassword" type="password" value={inputs.confirmPassword} required handleChange={handleChange} label="Confirm Password"/>
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;