
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import { getFirestore,collection, getDocs,doc, getDoc,addDoc,setDoc,where, query } from "firebase/firestore";
import { auth,db } from "./firconfig";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
//   authDomain: "test-project-67367.firebaseapp.com",
//   projectId: "test-project-67367",
//   storageBucket: "test-project-67367.appspot.com",
//   messagingSenderId: "986217264801",
//   appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
// };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);
  




  export async function SignSetup({ email, password, name }) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password,name);
      // console.log(res);
      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email
      });
      return res;
    } catch (e) {
      alert(e.message);
    }
  }
  
  export async function LoginSetup({ email, password }) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      return res;
    } catch (e) {
      alert(e.message);
    }
  }
  


// export { auth };