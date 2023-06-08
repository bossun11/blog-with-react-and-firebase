import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj248cmcauVcSEjfVddI6zoRg7WKiLLLA",
  authDomain: "blog-with-react-and-fire-9b5c5.firebaseapp.com",
  projectId: "blog-with-react-and-fire-9b5c5",
  storageBucket: "blog-with-react-and-fire-9b5c5.appspot.com",
  messagingSenderId: "1024688460096",
  appId: "1:1024688460096:web:5d5e8b8d5840152510eaa5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
