import "../styles/globals.css";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import ls from "local-storage";
import { useRouter } from "next/router";
import LogIn from "./login";
import Profile from "./profile";

function MyApp() {
  // useAuthState returns array of 3, first is user, second is loading, third is error

  // const user = useAuthState(auth);
  // const router = useRouter();
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // useState(() => {
  //   setLoggedInUser(ls("self"));
  // }, []);

  // if (!loggedInUser) return <LogIn />;

  return <Profile />;
}

export default MyApp;
