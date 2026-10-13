/*
  Settings for the DIP Practicals site.
  1. Firebase console > Project settings > Your apps > Web app > SDK setup and configuration > Config.
  2. Paste the values below. They are public identifiers, not passwords: security comes from the
     Firestore rules. GitHub may still show a "secret detected" alert; close it as "False positive".
*/
window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyAqQCbdJkVPals-C9uNjLSZ06zIqwycq8s",
  authDomain: "dip1415.firebaseapp.com",
  projectId: "dip1415",
  storageBucket: "dip1415.firebasestorage.app",
  messagingSenderId: "727900792208",
  appId: "1:727900792208:web:2e0c90ed2766f9e1a1bf15"
};

/* All database collections for this site start with this prefix (dip_users, dip_attempts, ...),
   so it can share one Firebase project with other labs. Must match firestore.rules. */
window.COLLECTION_PREFIX = "dip_";

/* Classes / divisions students choose from when registering. Leave the list empty [] for a free-text box.
   A fixed list keeps names consistent ("MTech DSML Sem 1", not "MTECH DSML SEM1", "MTech sem-1 DSML"...). */
window.DIVISIONS = ["MTech DSML Sem 1"];

/* Grading policy. Keep maxAttempts equal to dipMaxAttempts() in firestore.rules. */
window.GRADING = { maxAttempts: 4, penalty: 0.25 };
