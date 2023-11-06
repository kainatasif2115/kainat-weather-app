import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import { Header, Input, signupFields } from "./utils";
import { collection, addDoc  } from "firebase/firestore";
import {db} from '../../firebase';
import loginBg from './loginBg.svg'


const SignUp = () => {

  const fields=signupFields;
  let fieldsState={};

  fields.forEach(field => fieldsState[field.id]='');

  const [signupState,setSignupState]=useState({email:'', password:''});

  const signUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signupState.email
      , signupState.password)
      .then(async(userCredential) => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
    
            userName: signupState.username,
            userId: userCredential.user.uid
          });
          
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  return (
    <div className="flex items-center h-screen">
      <div className="w-1/2 bg-[#f7f5f5] p-12 ml-12 rounded-3xl">
        <form onSubmit={signUp}>
        <Header heading={'Create your Account'}/>
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account? {' '}
          <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">Sign in</Link>
        </p>

        <div className="p-12">
          {
            fields.map(field=>
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
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
            onSubmit={signUp}
          >

            Sign Up
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

export default SignUp;