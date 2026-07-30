import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcAjMKFAnNBiFfIhekOPtRadiCb0Ly8Ng",
  authDomain: "projectbahandi-7149a.firebaseapp.com",
  databaseURL: "https://projectbahandi-7149a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectbahandi-7149a",
  storageBucket: "projectbahandi-7149a.firebasestorage.app",
  messagingSenderId: "1017170558784",
  appId: "1:1017170558784:web:ca1c6942f68c2fec9304a5",
  measurementId: "G-FS77PDWKSK"
};

// Initialize Firebase Services locally within this module
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const msg = document.getElementById("loginMessage");
  const localBtn = document.getElementById("btnLocalSignIn");
  const googleBtn = document.getElementById("btnGoogleSignIn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const showStatus = (text, isSuccess = false) => {
    if (!msg) return;
    msg.classList.remove("warning", "success", "hidden");
    msg.classList.add(isSuccess ? "success" : "warning");
    msg.textContent = text;
  };

  // Helper function to save user record to Firestore
  async function saveUserToDatabase(user) {
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Firestore Save Error:", err);
    }
  }

  // 1. Email/Password Authentication
  const handleLocalSignIn = async (e) => {
    if (e) e.preventDefault();
    const email = emailInput?.value.trim();
    const password = passwordInput?.value.trim();

    if (!email || !password) {
      showStatus("Please fill in both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await saveUserToDatabase(userCredential.user);

      showStatus("Log in successful! Redirecting...", true);
      setTimeout(() => {
        window.location.href = "../User/user-home.html";
      }, 1000);
    } catch (error) {
      showStatus(`Login failed: ${error.message}`);
    }
  };

  localBtn?.addEventListener("click", handleLocalSignIn);

  // 2. Google Sign-In Authentication
  googleBtn?.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await saveUserToDatabase(result.user);

      showStatus("Google login successful! Redirecting...", true);
      setTimeout(() => {
        window.location.href = "../User/user-home.html";
      }, 1000);
    } catch (error) {
      showStatus(`Google login failed: ${error.message}`);
    }
  });
});
