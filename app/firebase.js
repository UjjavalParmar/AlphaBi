import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-_rCPDmmtdNnlqp_pevbJPxI9zcaqT6w",
  authDomain: "alphabitask.firebaseapp.com",
  projectId: "alphabitask",
  storageBucket: "alphabitask.appspot.com",
  messagingSenderId: "671920584449",
  appId: "1:671920584449:web:38c1b55ff93721e2ff8d00",
  measurementId: "G-MLLE3B0RWX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
