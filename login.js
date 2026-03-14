import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");

const provider = new GoogleAuthProvider();

loginBtn.onclick = async () => {

  try {

    await signInWithPopup(auth, provider);

    window.location.href = "index.html";

  } catch (error) {

    console.error(error);

  }

};