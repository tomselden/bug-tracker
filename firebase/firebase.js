import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBj5E733B8-xCuyons3M9dhEQE0W2s_2fE",
  authDomain: "bug-tracker-de8bd.firebaseapp.com",
  projectId: "bug-tracker-de8bd",
  storageBucket: "bug-tracker-de8bd.appspot.com",
  messagingSenderId: "196137404698",
  appId: "1:196137404698:web:f04cf8658912463c1404a3",
  measurementId: "G-MPY7F2CF7X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };