import { auth, db } from "./firebase.js";
import { doc, setDoc, collection, query, where, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const avatars = document.querySelectorAll(".avatar-option");
const preview = document.querySelector(".avatar-preview");


avatars.forEach((avatar) => {

avatar.addEventListener("click", () => {

// remove old glow
const current = document.querySelector(".avatar-option.selected");

if(current){
current.classList.remove("selected");
}

// add glow to clicked avatar
avatar.classList.add("selected");

// update big preview avatar
preview.textContent = avatar.textContent;

});

});

const continueBtn = document.getElementById("setupContinue");
const overlay = document.getElementById("setupOverlay");
const nameInput = document.querySelector(".setup-input");
const bioInput = document.querySelector(".setup-bio");

onAuthStateChanged(auth, async (user) => {

  if (!user) return;

  const userRef = doc(db, "Users", user.uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    // user already set up profile
    overlay.style.display = "none";
  } else {
    // new user → show setup
    overlay.style.display = "flex";
  }

});

continueBtn.addEventListener("click", async () => {

  const username = nameInput.value.trim().toLowerCase();
  const bio = bioInput.value.trim();
  const user = auth.currentUser;

  if (!user) {
  alert("Authentication not ready. Please try again.");
  return;
}

  if (!username) {
    alert("Please enter a username");
    return;
  }

  // Check if username already exists
  const q = query(
    collection(db, "Users"),
    where("username", "==", username)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    alert("Username already taken");
    return;
  }

  // get selected avatar
  const selected = document.querySelector(".avatar-option.selected");
  const avatar = selected ? selected.textContent : "🧑‍💻";

  // Save profile
  await setDoc(doc(db, "Users", user.uid), {
  username: username,
  bio: bio,
  avatar: avatar,
  createdAt: Date.now()
}, { merge: true });

  overlay.style.display = "none";

});