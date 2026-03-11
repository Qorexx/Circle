import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function getUser(uid) {

  const userRef = doc(db, "Users", uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) return null;

  return userSnap.data();

}