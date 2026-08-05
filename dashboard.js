import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdqq63eP_zc6UWjc5sSVRdwjoUnUzPYT4",
  authDomain: "auricember.firebaseapp.com",
  projectId: "auricember",
  storageBucket: "auricember.firebasestorage.app",
  messagingSenderId: "568693145265",
  appId: "1:568693145265:web:de258d43d06ff35778ec90",
  measurementId: "G-E109YXWP1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("welcome").textContent =
      "Welcome, " + user.email;
  } else {
    window.location.href = "index.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
