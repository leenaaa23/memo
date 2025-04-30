console.log("fire.js loaded");

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDa2gQCYMGjAWTgmk_ndzQCaetjptdM2Hs",
  authDomain: "login-7baa2.firebaseapp.com",
  projectId: "login-7baa2",
  storageBucket: "login-7baa2.firebasestorage.app",
  messagingSenderId: "449753956479",
  appId: "1:449753956479:web:34d3d8d9442bdc56527f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔒 ننتظر حتى تحميل كامل عناصر الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('signup-submit');

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('confirm-pass').value;

    alert("تم الضغط بنجاح! اسم المستخدم: " + username);
  });
});
