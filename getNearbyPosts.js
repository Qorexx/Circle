import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { db } from "./firebase.js";

export async function getNearbyPosts(userLat, userLon, radiusKm) {

  const snapshot = await getDocs(collection(db, "Posts"));

  const posts = [];

  snapshot.forEach(doc => {
    posts.push({
      id: doc.id,
      ...doc.data()
    });
  });


  return posts;

}