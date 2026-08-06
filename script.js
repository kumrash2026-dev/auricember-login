import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
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

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

const signup = document.getElementById("signup");
const login = document.getElementById("login");
const reset = document.getElementById("reset");


signup.onclick = async () => {

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

    try {
  await setDoc(doc(db, "users", userCredential.user.uid), {
    name: "New Customer",
    email: email.value,
    points: 0
  });
      alert("Firestore document created");

  console.log("Firestore document created");

} catch (e) {
  console.error("Firestore error:", e);
  msg.textContent = e.code + " : " + e.message;
}

    msg.textContent = "Account created successfully";

  } catch (error) {

    msg.textContent = error.message;

  }

};


login.onclick = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.textContent = "Login successful...";
      
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);

    })
    .catch(error => {
      msg.textContent = error.message;
    });
};


reset.onclick = () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      msg.textContent = "Reset email sent";
    })
    .catch(error => {
      msg.textContent = error.message;
    });
};
