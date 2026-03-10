import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function createPost(text, mediaUrl, mediaType, lat, lon, userId) {

  await addDoc(collection(db, "Posts"), {
    text: text,
    mediaUrl: mediaUrl,
    mediaType: mediaType,
    latitude: lat,
    longitude: lon,
    timestamp: Date.now(),
    likesCount: 0,
    commentsCount: 0,
    userId: userId
  });

}