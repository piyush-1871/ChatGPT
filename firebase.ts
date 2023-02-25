import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAurFlQcrBdgVhMlhHap9EWnc64AOcQXis",
  authDomain: "chat-gpt-3a947.firebaseapp.com",
  projectId: "chat-gpt-3a947",
  storageBucket: "chat-gpt-3a947.appspot.com",
  messagingSenderId: "357163317311",
  appId: "1:357163317311:web:89319a81ae2079daf8e08a",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
