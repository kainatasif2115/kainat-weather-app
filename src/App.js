import './App.css';
import SignIn from "./components/auth/signin";
import SignUp from './components/auth/signup';
import React from 'react';
import { auth } from "./firebase";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import MyFavorites from './pages/MyFavorites';
import WeatherForecast from './pages/WeatherForecast';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from './firebase';

import { useState, useEffect } from 'react';
function App() {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName]=useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("no user");
      }
    })
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "users"), where("userId", "==", userId))
        );

        const userData = querySnapshot.docs.map((doc) => doc.data());

        setUserName(userData[0].userName)
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);
  
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn setUserId={setUserId}/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home userName={userName}/>} />
        <Route path="/my-favorites" element={<MyFavorites userId={userId} userName={userName}/>} />
        <Route path="/weather-forecast" element={<WeatherForecast userId={userId} userName={userName}/>} />
      </Routes>
    </Router>
  );
}

export default App;