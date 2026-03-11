import { loginWithGoogle } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");

  if (!loginBtn) return;

  loginBtn.onclick = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Logged in:", user);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

});