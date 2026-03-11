import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function createComment(postId, userId, text) {

  await addDoc(collection(db, "Comments"), {
    postId: postId,
    userId: userId,
    text: text,
    timestamp: Date.now()
  });

}