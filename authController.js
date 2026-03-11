import { loginWithGoogle } from "./login.js";
import { getUser } from "./getUser.js";
import { createUser } from "./createUser.js";

document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");

  if (!loginBtn) return;

  loginBtn.onclick = async () => {
  try {
    const user = await loginWithGoogle();

    const existingUser = await getUser(user.uid);

    if (!existingUser) {
      await createUser(
        user.uid,
        user.displayName,
        user.email,
        user.photoURL
      );
      console.log("New user profile created");
    } else {
      console.log("User already exists");
    }

    console.log("Logged in:", user);

  } catch (err) {
    console.error("Login failed:", err);
  }
};

});