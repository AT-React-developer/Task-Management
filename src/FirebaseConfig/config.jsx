import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getDoc, getFirestore } from "firebase/firestore"
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESSUREMENT_ID
};
console.log(process.env.REACT_APP_MESSUREMENT_ID)
// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { config, app, analytics, collection, getDoc, addDoc, db }