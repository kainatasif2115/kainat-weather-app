import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import { Header, Input, loginFields } from "./utils";
import loginBg from './loginBg.svg'
import { useNavigate } from 'react-router-dom';

const SignIn = ({setUserId}) => {

  const navigate = useNavigate();

  const [loginState,setLoginState]=useState({email:'', password:''});

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

  const fields=loginFields;
  let fieldsState = {};
  fields.forEach(field=>fieldsState[field.id]='');

  const signIn = async(e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginState.email, loginState.password)
      .then((userCredential) => {
        setUserId(userCredential.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-1/2 bg-[#f7f5f5] p-12 ml-12 rounded-3xl">
        <form onSubmit={signIn}>
          <Header heading={'Login to your Account'}/>
          <p className="text-center text-sm text-gray-600 mt-5">
            Don't have an account? {' '}
            <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">Sign Up</Link>
          </p>

          <div className="p-12">
            {
              fields.map(field=>
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              
              )
            }
            <button
              type={'submit'}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              onSubmit={signIn}
            >

              Sign In
            </button>
          </div>
        </form>
      </div>
      <img 
        alt=""
        className="w-1/2"
        src={loginBg}
      />
    </div>
  );
};

export default SignIn;