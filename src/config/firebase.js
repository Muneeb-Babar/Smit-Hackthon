
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5OmB6U8GT5whx_hn545YJzl6tIo2vuH4",
    authDomain: "smit-hackthon.firebaseapp.com",
    projectId: "smit-hackthon",
    storageBucket: "smit-hackthon.appspot.com",
    messagingSenderId: "77043843822",
    appId: "1:77043843822:web:9c41d2fc9083bc93f229ff"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);