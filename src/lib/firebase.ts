import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByBUnoBl7glESeyO8xdmmUziUoaM8NY0s",
  authDomain: "produnity.firebaseapp.com",
  projectId: "produnity",
  storageBucket: "produnity.firebasestorage.app",
  messagingSenderId: "226504441639",
  appId: "1:226504441639:web:592b0dfeb441f085743302"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;