import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtLlhJBBGjXJ_NKCNhxS8RouSDE43i6r4",
  authDomain: "poryecto-4-3025f.firebaseapp.com",
  projectId: "poryecto-4-3025f",
  storageBucket: "poryecto-4-3025f.appspot.com",
  messagingSenderId: "583296684471",
  appId: "1:583296684471:web:bae993c0e546ce27229832"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app)