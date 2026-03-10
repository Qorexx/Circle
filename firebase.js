import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
  getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCBDP94gSZ3BQ3hrOagw49HsVrwah4NCTQ",
  authDomain: "circle-6fe9b.firebaseapp.com",
  projectId: "circle-6fe9b",
  storageBucket: "circle-6fe9b.firebasestorage.app",
  messagingSenderId: "656635933311",
  appId: "1:656635933311:web:238429fc484b2b429c854a",
  measurementId: "G-4ER29090X8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);