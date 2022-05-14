import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import ls from "local-storage";

const googleLogIn = async () => {
  const { user: gUser } = await signInWithPopup(auth, provider);
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

  window.location.href = "/chatrooms";
};

function LogIn() {
  return (
    <div>
      <h1>Welcome to Bug Tracker!</h1>
      <div>
        <h2>Sign-In With Google</h2>
        <button onClick={() => googleLogIn()}>Google Login</button>
      </div>
    </div>
  );
}

export default LogIn;
