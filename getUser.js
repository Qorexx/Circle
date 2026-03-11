import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function getUser(userId) {

  const userRef = doc(db, "Users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    console.log("User not found");
    return null;
  }

  return userSnap.data();
}