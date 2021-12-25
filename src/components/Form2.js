import React, { useState } from 'react';
import './Form2.js';
import FormLogin from './FormLogin';
import FormSuccess from './FormSucess';

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-cont'>
    <img src='images/sign.jpg' />
      <div className='form-container'>
    
        <div className='form-content-left'>
         <h1>Welcome Back!</h1>
         
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </>
  );
};

export default Form2;