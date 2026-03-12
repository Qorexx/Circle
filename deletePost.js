import { collection, getDocs, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { db } from "./firebase.js";

export async function deletePost(postId) {

  // get all comments
  const snapshot = await getDocs(collection(db, "Comments"));

  // delete comments belonging to this post
  snapshot.forEach(async (c) => {

    const data = c.data();

    if (data.postId === postId) {
      await deleteDoc(doc(db, "Comments", c.id));
    }

  });

  // delete the post itself
  await deleteDoc(doc(db, "Posts", postId));

}