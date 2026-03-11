import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "./firebase.js";
import { createUser } from "./createUser.js";

const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {

  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  await createUser(user);

  return user;
}