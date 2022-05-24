import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import ls from "local-storage";
import { getUserByEmail, createUser } from "../services/index";
import Profile from "./profile";
import { Button } from "react-bootstrap";
import styles from "../css/login.module.css"
import { style } from "@mui/system";
import 'bootstrap/dist/css/bootstrap.min.css';

const googleLogIn = async () => {
  const { user: gUser } = await signInWithPopup(auth, provider);
  console.log(gUser.email)
  const existingUser = await getUserByEmail(gUser.email).then((response) =>
    response.json()
  );
  let loggedInUser;
  if (existingUser.user) {
    loggedInUser = existingUser;
  } else {
    loggedInUser = await createUser({
      username: gUser.displayName,
      email: gUser.email,
      avatarURL: gUser.photoURL,
    }).then((response) => response.json());
  }
  ls("self", loggedInUser.user);
  return <Profile />
  
};

function LogIn() {
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <h1 className={styles.header}>BUG TRACKER</h1>
        <div className={styles.button}>
        <Button variant="primary" onClick={() => googleLogIn()}>Google Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
