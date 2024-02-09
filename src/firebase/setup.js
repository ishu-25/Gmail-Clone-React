import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClnPIl_9uNCqwgnJ9j8Kkt8dwUR8IbIS8",
  authDomain: "clone-588dd.firebaseapp.com",
  projectId: "clone-588dd",
  storageBucket: "clone-588dd.appspot.com",
  messagingSenderId: "49021794066",
  appId: "1:49021794066:web:d058ee89a728bac68ce5cb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)