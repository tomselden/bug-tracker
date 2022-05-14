import "../styles/globals.css";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import ls from "local-storage";

function MyApp({ Component, pageProps }) {
  // useAuthState returns array of 3, first is user, second is loading, third is error
  const [user, loading, error] = useAuthState(auth);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useState(() => {
    setLoggedInUser(ls("self"));
  }, []);

  if (!loggedInUser) return (window.location.href = "/login");

  return (window.location.href = "/profile");
}

export default MyApp;
