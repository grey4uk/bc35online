import React from 'react';

export const FormFunc = ({ logOut }) => {
  return (
    <>
      <h2>FORM on FunctionalComponent</h2>
      <button onClick={logOut} type='button'>
        LOGOUT
      </button>
    </>
  );
};
