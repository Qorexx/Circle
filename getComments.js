import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function getComments(postId) {

  const snapshot = await getDocs(collection(db, "Comments"));

  const comments = [];

  snapshot.forEach(doc => {

    const data = doc.data();

    if (data.postId === postId) {
      comments.push(data);
    }

  });

  return comments;

}