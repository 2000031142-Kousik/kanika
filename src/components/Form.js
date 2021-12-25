import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSighnup';
import FormSuccess from './FormSucess';

const Form = () => {
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
         <h1>JoinUs!</h1>
         <p>Happy Farming </p>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
     </div>
    </>
  );
};

export default Form;