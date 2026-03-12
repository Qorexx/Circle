import { getUser } from "./getUser.js";
import { getNearbyPosts } from "./getNearbyPosts.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

const params = new URLSearchParams(window.location.search);
const userId = params.get("uid");

const usernameEl = document.getElementById("username");
const bioEl = document.getElementById("bio");
const profilePicEl = document.getElementById("profilePic");
const postsEl = document.getElementById("posts");

async function loadProfile() {

  const user = await getUser(userId);

  usernameEl.innerText = user.username;
  bioEl.innerText = user.bio || "";
  profilePicEl.src = user.profilePictureUrl;

  const snapshot = await getDocs(collection(db, "Posts"));

snapshot.forEach(doc => {

  const post = doc.data();

  if (post.userId === userId && (post.text || post.mediaUrl)) {

  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
    ${post.mediaType === "image" ? `<img class="post-image" src="${post.mediaUrl}">` : ""}
    ${post.text ? `<div class="caption">${post.text}</div>` : ""}
  `;

  postsEl.appendChild(div);
}

});

}

loadProfile();