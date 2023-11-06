
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3sKHuhzb1Bak0XKpQJxIECXrtkSLRcLM",
    authDomain: "weathertest-397d2.firebaseapp.com",
    databaseURL: "https://weathertest-397d2-default-rtdb.firebaseio.com",
    projectId: "weathertest-397d2",
    storageBucket: "weathertest-397d2.appspot.com",
    messagingSenderId: "115845190728",
    appId: "1:115845190728:web:7d3e6f287263b50b9a347d"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);