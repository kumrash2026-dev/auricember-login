import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {getFirestore,doc,setDoc} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyBdqq63eP_zc6UWjc5sSVRdwjoUnUzPYT4",authDomain:"auricember.firebaseapp.com",projectId:"auricember",storageBucket:"auricember.firebasestorage.app",messagingSenderId:"568693145265",appId:"1:568693145265:web:de258d43d06ff35778ec90",measurementId:"G-E109YXWP1W"};
const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);const e=()=>email.value,p=()=>password.value,m=document.getElementById('msg');
signup.onclick = async () => {

  try {

    const userCredential = await createUserWithEmailAndPassword(auth, e(), p());

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: "New User",
      email: user.email,
      points: 0
    });

    m.textContent = "Account created successfully...";

  } catch (error) {

    m.textContent = error.message;

  }

};
login.onclick = () =>
  signInWithEmailAndPassword(auth, e(), p())
    .then(() => {
      m.textContent = "Login successful...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch(x => {
      m.textContent = x.message;
    });
reset.onclick=()=>sendPasswordResetEmail(auth,e()).then(()=>m.textContent='Reset email sent').catch(x=>m.textContent=x.message);
