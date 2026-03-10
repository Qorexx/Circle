import { doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function likePost(postId){

  const postRef = doc(db, "Posts", postId);

  await updateDoc(postRef, {
    likesCount: increment(1)
  });

}