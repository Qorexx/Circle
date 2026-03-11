import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function createUser(user) {

  const userRef = doc(db, "Users", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return;
  }

  await setDoc(userRef, {
    username: user.displayName || "new_user",
    email: user.email || "",
    profilePictureUrl: user.photoURL || "",
    bio: "",
    createdAt: Date.now()
  });

}