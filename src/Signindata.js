// Signindata component
import React from 'react';
import { useContext } from 'react';
import LoginPage from './Login';
import { mycontext } from './ExContext';

const Signindata = (  ) => {
    const {data}= useContext(mycontext);
    console.log("context data"+ data);
  return (
    <div>
        {/* {console.log("Prop Data")}
        {console.log(data)} */}
      {/* <h2>User Data</h2>
      <p>First Name: {data.Firstname}</p>
      <p>Last Name: {data.Lastname}</p>
      <p>Email: {data.Email}</p>
      <p>Phone Number: {data.PhoneNUmber}</p>
      <p>Password: {data.password}</p> */}
    </div>
  );
};

export default Signindata;
