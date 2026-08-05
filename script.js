import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
const firebaseConfig={apiKey:"AIzaSyBdqq63eP_zc6UWjc5sSVRdwjoUnUzPYT4",authDomain:"auricember.firebaseapp.com",projectId:"auricember",storageBucket:"auricember.firebasestorage.app",messagingSenderId:"568693145265",appId:"1:568693145265:web:de258d43d06ff35778ec90",measurementId:"G-E109YXWP1W"};
const app=initializeApp(firebaseConfig);const auth=getAuth(app);const e=()=>email.value,p=()=>password.value,m=document.getElementById('msg');
signup.onclick=()=>createUserWithEmailAndPassword(auth,e(),p()).then(()=>m.textContent='Account created').catch(x=>m.textContent=x.message);
login.onclick=()=>signInWithEmailAndPassword(auth,e(),p()).then(()=>m.textContent = "Login successful...";
setTimeout(() => {
    window.location.href = "dashboard.html";
}, 1000);
reset.onclick=()=>sendPasswordResetEmail(auth,e()).then(()=>m.textContent='Reset email sent').catch(x=>m.textContent=x.message);
