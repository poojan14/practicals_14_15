/*
  Firebase connection settings for the DIP Practicals site.
  1. Firebase console > Project settings > Your apps > Web app > SDK setup and configuration > Config.
  2. Paste the values below (these are public identifiers, not secrets; security comes from firestore.rules).
*/

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAqQCbdJkVPals-C9uNjLSZ06zIqwycq8s",
  authDomain: "dip1415.firebaseapp.com",
  projectId: "dip1415",
  storageBucket: "dip1415.firebasestorage.app",
  messagingSenderId: "727900792208",
  appId: "1:727900792208:web:2e0c90ed2766f9e1a1bf15"
};
/* Grading policy. Keep maxAttempts equal to MAX_ATTEMPTS in firestore.rules. */
window.GRADING = { maxAttempts: 4, penalty: 0.25 };
/* Grading policy. Keep maxAttempts equal to MAX_ATTEMPTS in firestore.rules. */
window.GRADING = { maxAttempts: 4, penalty: 0.25 };


