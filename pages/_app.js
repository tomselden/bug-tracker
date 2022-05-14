import '../styles/globals.css'
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth"

function MyApp({ Component, pageProps }) {
  // useAuthState returns array of 3, first is user, second is loading, third is error
  const [user, loading, error] = useAuthState(auth);
  const [loggedInUser, setLoggedInUser] = useState(null)
  
  useState(() => {
    setLoggedInUser(ls('self'))
  }, [])

  if (!loggedInUser) return <SignIn />;

  return <Component {...pageProps} />;
}

export default MyApp;