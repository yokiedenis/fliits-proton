
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyADVf-QBmPrYag0KJ2yxVPLJFj_KtwxLrQ",
  authDomain: "fliits-app.firebaseapp.com",
  projectId: "fliits-app",
  storageBucket: "fliits-app.firebasestorage.app",
  messagingSenderId: "75972708692",
  appId: "1:75972708692:web:1b2752aa795f3f8438a0c1",
  measurementId: "G-G359F95RMY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);







