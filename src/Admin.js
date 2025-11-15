import admin from "firebase-admin";

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert("./serviceAccountKey.json") // download this from Firebase Project Settings → Service Accounts
});

const uid =[ "KRhBJbZaA0UvfyvjD5WJYmppUmE2", "2z2FCOepZ3WETxcFjTFUi85Zo8H3"];


admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("Admin claim set for user:", uid);
  })
  .catch((err) => {
    console.error("Error setting admin claim:", err);
  });
